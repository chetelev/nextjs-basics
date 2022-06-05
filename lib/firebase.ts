import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDyPkY4VFTYot5v7QP3iy05OLo0ezxfWSc",
  authDomain: "nextjs-basic-3fb3c.firebaseapp.com",
  projectId: "nextjs-basic-3fb3c",
  storageBucket: "nextjs-basic-3fb3c.appspot.com",
  messagingSenderId: "530187197034",
  appId: "1:530187197034:web:e30ba211c005864db0c813",
  measurementId: "G-2TZFTSPZVE",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
export const firestore = firebase.firestore();
export const storage = firebase.storage();
