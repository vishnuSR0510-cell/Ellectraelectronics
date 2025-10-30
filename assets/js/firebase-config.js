// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDEXFYmYfU7NClatruueJVshmZ96qwQSfs",
  authDomain: "ellectra-electronics-ffbd1.firebaseapp.com",
  projectId: "ellectra-electronics-ffbd1",
  storageBucket: "ellectra-electronics-ffbd1.firebasestorage.app",
  messagingSenderId: "691603201571",
  appId: "1:691603201571:web:9586d82180dbf706bb1b96"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();



// Export for other scripts (optional for modular code)
window.auth = auth;
window.db = db;