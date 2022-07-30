// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAA5b_oHIdfK2I3XAUz641tGp4MCf626AE",
  authDomain: "proyecto-telematica-151a1.firebaseapp.com",
  projectId: "proyecto-telematica-151a1",
  storageBucket: "proyecto-telematica-151a1.appspot.com",
  messagingSenderId: "500121244409",
  appId: "1:500121244409:web:c0668449d4e0d110534828"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
