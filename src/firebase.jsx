import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
//   apiKey: "AIzaSyB82l3Gn3l08XXBO5ctsng3bEfnZOWD854",
//   authDomain: "banco-tcc-74fdf.firebaseapp.com",
//   projectId: "banco-tcc-74fdf",
//   storageBucket: "banco-tcc-74fdf.appspot.com",
//   messagingSenderId: "724106422897",
//   appId: "1:724106422897:web:16d6732d3176b1ebcc89d0"

  apiKey: "AIzaSyAXURYSNrCjcGWIC7hecq3wwDM9KZi_X4A",
  authDomain: "manager-api-8c20b.firebaseapp.com",
  projectId: "manager-api-8c20b",
  storageBucket: "manager-api-8c20b.firebasestorage.app",
  messagingSenderId: "614268895104",
  appId: "1:614268895104:web:36a2c0b14f3447595a4b65"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app)

export {auth, db}