// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyB-hanmTd5gzzhFS4bAPQCPi8t0IMvak_E",
    authDomain: "edukon-shop.firebaseapp.com",
    projectId: "edukon-shop",
    storageBucket: "edukon-shop.appspot.com",
    messagingSenderId: "832501466418",
    appId: "1:832501466418:web:9a1e0e3fe266d42d02432b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;