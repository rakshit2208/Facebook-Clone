// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
import firebase from "firebase/compat/app";
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import { getStorage } from "firebase/storage";

// import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAGrRRmbcH8IfsXObpt7k6mOj67SHN9MGU",
  authDomain: "facebook-clone-c121f.firebaseapp.com",
  projectId: "facebook-clone-c121f",
  storageBucket: "facebook-clone-c121f.appspot.com",
  messagingSenderId: "1015463212879",
  appId: "1:1015463212879:web:2b224f2849f51a4d1bf73a"
};

// This line of code here connects everything
const firebaseApp = firebase.initializeApp(firebaseConfig);

// we want to use firebase authentication
const auth = firebase.auth();

const db = firebaseApp.firestore();

// Initialize Firebase
// const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
// export const auth = getAuth(app);

export const storage = getStorage();
// export const db = getFirestore(app);
//get the firestore database


export {db , auth};