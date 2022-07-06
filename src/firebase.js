// src/firebase.js

// Firebase App (the core Firebase SDK) is always required and must be listed first
// import firebase from "firebase/app";

// Add the Firebase products that you want to use
// import "firebase/firestore";

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyAcVs2DZI9UJKwE226VPnh0t3IrgDDpdBQ",
  authDomain: "dataportal-56eea.firebaseapp.com",
  projectId: "dataportal-56eea",
  storageBucket: "dataportal-56eea.appspot.com",
  messagingSenderId: "158688300541",
  appId: "1:158688300541:web:1de0920faf661df30c9d94",
  measurementId: "G-21QMVC51C8",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
