// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
//import { getAnalytics } from "firebase/analytics";
import { getFirestore, serverTimestamp, arrayUnion, doc, setDoc } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBmU7A8RrBCuGTMRDZkCCQ0RSjPJnmQQZY",
  authDomain: "crowdsense-99a8e.firebaseapp.com",
  projectId: "crowdsense-99a8e",
  storageBucket: "crowdsense-99a8e.firebasestorage.app",
  messagingSenderId: "366748033680",
  appId: "1:366748033680:web:a42fd3f69124bc3c9d2e15",
  measurementId: "G-V8BPX5KNE1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const auth = getAuth(app)   

export {db, auth, serverTimestamp, arrayUnion, setDoc, doc};
//export default app;