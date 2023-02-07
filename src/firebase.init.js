// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDYAfcLwvd4x2iG5fLwPk3dSqZ26alFm6c",
  authDomain: "mobile-exchange-41ec9.firebaseapp.com",
  projectId: "mobile-exchange-41ec9",
  storageBucket: "mobile-exchange-41ec9.appspot.com",
  messagingSenderId: "319718746478",
  appId: "1:319718746478:web:fe5ce2255a3a649172b97f"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
export default auth;