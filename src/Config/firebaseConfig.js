import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBjoH5y2qYZ-C8_2njncbJS26fCSK7TEQA",
  authDomain: "react-auth-app-6b14b.firebaseapp.com",
  projectId: "react-auth-app-6b14b",
  storageBucket: "react-auth-app-6b14b.firebasestorage.app",
  messagingSenderId: "816009020905",
  appId: "1:816009020905:web:675e06e26d4e978d477778",
  measurementId: "G-XFL1716766",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
