import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC3DheFblJq4LnwO2q3HLu7ShozkS8h6oM",
  authDomain: "crud-firebase-react-spa.firebaseapp.com",
  databaseURL: "https://crud-firebase-react-spa-default-rtdb.firebaseio.com",
  projectId: "crud-firebase-react-spa",
  storageBucket: "crud-firebase-react-spa.firebasestorage.app",
  messagingSenderId: "803469744295",
  appId: "1:803469744295:web:e27d822fe5ea8aa842a382"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);