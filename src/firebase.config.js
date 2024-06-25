// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDmMSHCbeeSB2CfYlzpWhXotXmJavcUQNs",
  authDomain: "job-board-reactjs-2af1e.firebaseapp.com",
  projectId: "job-board-reactjs-2af1e",
  storageBucket: "job-board-reactjs-2af1e.appspot.com",
  messagingSenderId: "855937122382",
  appId: "1:855937122382:web:f9a82a4101de5f0fba431f",
  measurementId: "G-B6JPJCLD0M",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
