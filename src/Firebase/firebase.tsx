// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBuVG0ekeuhX-4-0vKRlDILaONcRb9FZhY",
    authDomain: "velvettirage.firebaseapp.com",
    projectId: "velvettirage",
    storageBucket: "velvettirage.appspot.com",
    messagingSenderId: "1035032449131",
    appId: "1:1035032449131:web:55273b89ea33069592212e",
    measurementId: "G-QPB1BYMZ1E"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore(app);