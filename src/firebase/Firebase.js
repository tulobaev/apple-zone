import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAtB8xgHPiAlebj9ZUcon6vcUGv9aXs9UA",
  authDomain: "appleauth-85533.firebaseapp.com",
  projectId: "appleauth-85533",
  storageBucket: "appleauth-85533.firebasestorage.app",
  messagingSenderId: "557371119845",
  appId: "1:557371119845:web:aa40af9d82b206e2ee1c0c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export default app;
