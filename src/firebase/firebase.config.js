// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    storageBucket:import.meta.env.VITE_storageBucket,
    messagingSenderId: "149249595689",
    authDomain: "cardoc-a8b6b.firebaseapp.com",
    projectId: "cardoc-a8b6b",
    apiKey: "AIzaSyCqoKahd6nKwuEgmJ2_KRHRtsAb-Ax-Ynk",
    appId: "1:149249595689:web:7a0bb6b74374ab1f73bf38"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;