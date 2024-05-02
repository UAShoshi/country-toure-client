// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyABvqGB_mPFLzNwG8nsYAB3c3b0oqrDm6E",
  authDomain: "country-tour-304c1.firebaseapp.com",
  projectId: "country-tour-304c1",
  storageBucket: "country-tour-304c1.appspot.com",
  messagingSenderId: "435909795861",
  appId: "1:435909795861:web:cfe83fd63fa8e5c352ee1c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;