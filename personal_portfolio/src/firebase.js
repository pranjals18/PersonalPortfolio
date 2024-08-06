// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration


const firebaseConfig = {
    apiKey: "AIzaSyDNfFfDTJqHgVHbjyGE77gQzwlcwcALNWE",
    authDomain: "pranjal-personal-portfolio.firebaseapp.com",
    projectId: "pranjal-personal-portfolio",
    storageBucket: "pranjal-personal-portfolio.appspot.com",
    messagingSenderId: "96781308117",
    appId: "1:96781308117:web:fb5b3dcd5d6d3451c8925c"
};

// Initialize Firebase

export const app = initializeApp(firebaseConfig);
export const db = getFirestore();