// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAonOtWOnLTVBuwaTU98yMEI4G5gGrVN2k",
  authDomain: "mewol-ff9fd.firebaseapp.com",
  projectId: "mewol-ff9fd",
  storageBucket: "mewol-ff9fd.appspot.com",
  messagingSenderId: "43799751801",
  appId: "1:43799751801:web:d8aa66731d613cd6aff8a8",
  measurementId: "G-T87VVPJRQ0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);