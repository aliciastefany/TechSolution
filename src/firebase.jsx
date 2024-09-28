// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB82l3Gn3l08XXBO5ctsng3bEfnZOWD854",
  authDomain: "banco-tcc-74fdf.firebaseapp.com",
  projectId: "banco-tcc-74fdf",
  storageBucket: "banco-tcc-74fdf.appspot.com",
  messagingSenderId: "724106422897",
  appId: "1:724106422897:web:16d6732d3176b1ebcc89d0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app)

export {auth, db}