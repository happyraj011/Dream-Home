// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA8y7mP7dGxW6gxVxbLbXB7vKWDvRtgzoM",
  authDomain: "dream-home-cd926.firebaseapp.com",
  projectId: "dream-home-cd926",
  storageBucket: "dream-home-cd926.appspot.com",
  messagingSenderId: "502880592080",
  appId: "1:502880592080:web:d4e66101c2e6a6b78ebed5"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db=getFirestore();