// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCrIuqf6OniaFohHx5inZhWNGT_rz3QCeM",
  authDomain: "rizqifajri-portofolio.firebaseapp.com",
  projectId: "rizqifajri-portofolio",
  storageBucket: "rizqifajri-portofolio.firebasestorage.app",
  messagingSenderId: "492135912234",
  appId: "1:492135912234:web:9110cc6e168be4638fc453",
  measurementId: "G-VDQFKFW9Z6"
};

// Init Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Auth
export const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export const loginWithGoogle = () => signInWithPopup(auth, provider);
export const logout = () => signOut(auth);

// Firestore
export const db = getFirestore(app);
