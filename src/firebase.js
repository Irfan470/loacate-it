// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirebase, getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBT3JRSjweWdjgAsN3pa_TcBY8bKmiHDbs",
  authDomain: "locate-it-e2af8.firebaseapp.com",
  projectId: "locate-it-e2af8",
  storageBucket: "locate-it-e2af8.appspot.com",
  messagingSenderId: "659058999860",
  appId: "1:659058999860:web:4bf9bcc2a42481fe684061",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
