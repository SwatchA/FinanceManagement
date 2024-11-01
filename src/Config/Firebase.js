// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getAuth,
  GoogleAuthProvider,
  FacebookAuthProvider,
  GithubAuthProvider,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyByc5ln7kHeMMdD-ADxO9OnBjODHuh_Xn4",
  authDomain: "financeman-c3a97.firebaseapp.com",
  projectId: "financeman-c3a97",
  storageBucket: "financeman-c3a97.firebasestorage.app",
  messagingSenderId: "374990049943",
  appId: "1:374990049943:web:e86b84231680b6610bcfd2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const firestore = getFirestore(app);
const provider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();
const githubProvider = new GithubAuthProvider();
export {
  auth,
  analytics,
  firestore,
  provider,
  facebookProvider,
  githubProvider,
};
