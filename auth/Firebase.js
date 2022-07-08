import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD3u_G0rfe4MlD597t0St-3X72lQTW5h6w",
  authDomain: "agricmarketplace-2e584.firebaseapp.com",
  projectId: "agricmarketplace-2e584",
  storageBucket: "agricmarketplace-2e584.appspot.com",
  messagingSenderId: "953771754568",
  appId: "1:953771754568:web:1cb229f5493239676cc47d",
  measurementId: "G-R39K7KEQE4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore(app);

export { auth, db };
