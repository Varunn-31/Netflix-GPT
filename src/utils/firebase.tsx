// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyABpXQ_BDE9VyQwZ2oUS9MZrOr4l38myNo",
  authDomain: "netflixgpt-e38fe.firebaseapp.com",
  projectId: "netflixgpt-e38fe",
  storageBucket: "netflixgpt-e38fe.firebasestorage.app",
  messagingSenderId: "219421720386",
  appId: "1:219421720386:web:425b2e891f6f489e9292db",
  measurementId: "G-M8QPWGCJKW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);