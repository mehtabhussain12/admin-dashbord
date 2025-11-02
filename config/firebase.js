// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCqkXUCcROejlREShwMWuvWDol7BnqIbzQ",
  authDomain: "admin-dashboard-5c0e7.firebaseapp.com",
  projectId: "admin-dashboard-5c0e7",
  storageBucket: "admin-dashboard-5c0e7.firebasestorage.app",
  messagingSenderId: "474624890184",
  appId: "1:474624890184:web:2bc370e7b1788a43ca8f7d",
  measurementId: "G-W3G1GKV7XK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
export { auth , app , analytics};