import React from "react";
import { useNavigate } from "react-router-dom";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase.tsx";
import { useEffect } from "react";
import { removeUser, addUser } from "../utils/userSlice.tsx";
import { useDispatch, useSelector } from "react-redux";
import { LOGO, SUPPORTED_LANGUAGES, USER_AVATAR } from "../utils/constants.tsx";
import { toggleGPTSearchView } from "../utils/gptSlice.tsx";

const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const showGPTSearch = useSelector((state: any) => state.gpt.showGPTSearch);
    
    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
                navigate("/");
            })
            .catch((error) => {
                console.error("Sign out error:", error);
            });
    };
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                const { uid, email, displayName, photoURL } = user;
                dispatch(
                    addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL })
                );
                navigate("/browse");
            } else {
                dispatch(removeUser(null));
            }
        });
        // unsubscribe when component unmounts
        return () => unsubscribe();
    }, [dispatch, navigate]);

    const handleLangeuageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        dispatch({ type: "config/changeLanguage", payload: e.target.value });
    };
    return (
        <div className="fixed top-0 left-0 right-0 w-full px-2 sm:px-4 md:px-8 py-2 sm:py-4 bg-transparent z-50 flex flex-wrap flex-row justify-between items-center gap-2">
            <img
                className="w-20 sm:w-32 md:w-40 object-contain"
                src={LOGO}
                alt="Netflix logo"
            />
            <div className="flex flex-wrap flex-row items-center gap-2 sm:gap-4 justify-end w-auto">
                {showGPTSearch && (
                    <select className="bg-black text-white px-3 py-2 rounded-netflix border border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary-500 min-w-[80px] sm:min-w-[120px] font-medium" onChange={handleLangeuageChange}>
                        {SUPPORTED_LANGUAGES.map((lang) => (
                            <option key={lang.identifier} value={lang.identifier}>
                                {lang.name}
                            </option>
                        ))}
                    </select>
                )}
                <button
                    className="py-2 px-4 sm:py-2.5 sm:px-6 mx-1 sm:mx-2 my-0 bg-primary-500 text-white rounded-netflix text-xs sm:text-sm font-semibold whitespace-nowrap hover:bg-primary-600 transition-all duration-200 shadow-netflix hover:shadow-glow active:scale-98"
                    onClick={() => {
                        if (showGPTSearch) {
                            dispatch(toggleGPTSearchView());
                        } else {
                            dispatch(toggleGPTSearchView());
                        }
                    }}
                >
                    {showGPTSearch ? "Homepage" : "GPT Search"}
                </button>
                <img 
                    alt="usericon" 
                    src={USER_AVATAR} 
                    className="w-8 h-8 rounded cursor-pointer hover:ring-2 hover:ring-white transition mx-1 sm:mx-2"
                />
                <button 
                    onClick={handleSignOut}
                    className="bg-primary-500 text-white px-4 py-2 sm:px-6 sm:py-2.5 rounded-netflix text-xs sm:text-sm font-semibold hover:bg-primary-600 transition-all duration-200 whitespace-nowrap mx-1 sm:mx-2 shadow-netflix hover:shadow-glow active:scale-98"
                >
                    Sign Out
                </button>
            </div>
        </div>
    );
};

export default Header;