// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import{GoogleAuthProvider, getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDpz5Lw06r597YGDHmFvAlrOuxa0Qq9l0M",
  authDomain: "disaster-relief-crowd-funding.firebaseapp.com",
  projectId: "disaster-relief-crowd-funding",
  storageBucket: "disaster-relief-crowd-funding.appspot.com",
  messagingSenderId: "491205648290",
  appId: "1:491205648290:web:9099eaa2260631faf91cfb",
  measurementId: "G-PXWJJX3WGY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
const analytics = getAnalytics(app);
const googleProvider=new GoogleAuthProvider();
export {googleProvider,auth} 