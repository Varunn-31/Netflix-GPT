import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { checkValidEmailOnly } from "../utils/validate.tsx";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase.tsx";
import { BG_URL } from "../utils/constants.tsx";
import { LOGO } from "../utils/constants.tsx";
const Authentication = () => {
	const [isSignIn, setIsSignIn] = useState(true);
	const nameRef = useRef<HTMLInputElement | null>(null);
	const emailRef = useRef<HTMLInputElement | null>(null);
	const passwordRef = useRef<HTMLInputElement | null>(null);
	const [error, setError] = useState<string | null>(null);
	const navigate = useNavigate();

	const handleButtonClick = () => {
		const email = emailRef.current?.value ?? "";
		const password = passwordRef.current?.value ?? "";
		const name = nameRef.current?.value ?? "";

		// Validate email
		const emailMessage = checkValidEmailOnly(email);
		if (emailMessage) {
			setError(emailMessage);
			return;
		}

		// Validate password
		if (password.length < 6) {
			setError("Password must be at least 6 characters");
			return;
		}

		// For sign up, validate name
		if (!isSignIn && name.trim().length === 0) {
			setError("Please enter your name");
			return;
		}

		setError(null);

		if (isSignIn) {
			signInWithEmailAndPassword(auth, email, password)
				.then((userCredential) => {
					const user = userCredential.user;
					console.log("Signed in:", user);
					navigate("/browse");
				})
				.catch((error) => {
					setError(error.message);
				});
		} else {
			createUserWithEmailAndPassword(auth, email, password)
				.then((userCredential) => {
					const user = userCredential.user;
					console.log("Signed up:", user);
					navigate("/browse");
				})
				.catch((error) => {
					setError(error.message);
				});
		}
	};

	

	return (
		<div className="relative min-h-screen w-full text-white bg-black">
			{/* Responsive Netflix Logo Top Left */}
			<div className="absolute top-0 left-0 w-full flex items-start justify-start z-20 p-2 sm:p-4">
				<img
					src={LOGO}
					alt="Netflix logo"
					className="w-24 sm:w-32 md:w-40 object-contain"
				/>
			</div>
			<div className="absolute inset-0">
				<img
					className="h-full w-full object-cover opacity-60"
					src={BG_URL}
					alt="Netflix background"
				/>
				<div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/20" />
			</div>
			<div className="relative z-10 flex min-h-screen items-center justify-center px-4">
				<div className="w-full max-w-sm rounded-lg bg-black/80 px-8 py-10 shadow-netflix border border-gray-700">
					<h2 className="mb-6 text-3xl font-display font-bold tracking-tight">{isSignIn ? "Sign In" : "Sign Up"}</h2>

					<form
						className="space-y-4"
						onSubmit={(e) => {
							e.preventDefault();
							handleButtonClick();
						}}
					>
						{!isSignIn && (
							<input
								ref={nameRef}
								type="text"
								placeholder="Full Name"
								className="w-full rounded-netflix bg-zinc-900 border border-gray-600 px-4 py-3 text-sm outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all duration-200"
							/>
						)}
						<input
							ref={emailRef}
							type="email"
							placeholder="Email Address"
							className="w-full rounded-netflix bg-zinc-900 border border-gray-600 px-4 py-3 text-sm outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all duration-200"
						/>
						<input
							ref={passwordRef}
							type="password"
							placeholder="Password"
							className="w-full rounded-netflix bg-zinc-900 border border-gray-600 px-4 py-3 text-sm outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all duration-200"
						/>
						<button
							type="submit"
							className="w-full rounded-netflix bg-primary-500 py-3 text-base font-semibold hover:bg-primary-600 transition-all duration-200 shadow-netflix hover:shadow-glow active:scale-98"
						>
							{isSignIn ? "Sign In" : "Sign Up"}
						</button>
					</form>

					{error && <p className="mt-3 text-sm text-primary-500 font-medium">{error}</p>}

					<p className="mt-6 text-sm text-gray-400">
						{isSignIn ? (
							<>
								New to Netflix?{" "}
								<button
									type="button"
									className="text-white font-medium hover:underline"
									onClick={() => setIsSignIn(false)}
								>
									Sign up now
								</button>
							</>
						) : (
							<>
								Already have an account?{" "}
								<button
									type="button"
									className="text-white font-medium hover:underline"
									onClick={() => setIsSignIn(true)}
								>
									Sign in now
								</button>
							</>
						)}
					</p>
				</div>
			</div>
		</div>
	);
};

export default Authentication;

