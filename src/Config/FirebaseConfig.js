// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const FirebaseConfig = {
    apiKey: "AIzaSyADU-acQZahDzEpOYWe2hduvc-U8kg8sLY",
    authDomain: "programerly.firebaseapp.com",
    projectId: "programerly",
    storageBucket: "programerly.appspot.com",
    messagingSenderId: "244913944852",
    appId: "1:244913944852:web:d13af228388def854b6a01"
};

// Initialize Firebase
const app = initializeApp(FirebaseConfig);
export default app;