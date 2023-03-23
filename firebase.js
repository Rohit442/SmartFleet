// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/database";

// import "firebase/firestore";
// import "firebase/storage";
// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// import { getStorage } from "firebase/storage";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB2lqOxGmMnTaSlWWssDktXgaiV-bEJewU",
  authDomain: "fir-auth-ef3e8.firebaseapp.com",
  projectId: "fir-auth-ef3e8",
  databaseURL:
    "https://fir-auth-ef3e8-default-rtdb.europe-west1.firebasedatabase.app",
  storageBucket: "fir-auth-ef3e8.appspot.com",
  messagingSenderId: "113725803255",
  appId: "1:113725803255:web:e743e762c7541079e1a1f2",
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const auth = firebase.auth();
// const db = getFirestore(app);
// const storage = getStorage(app);
export { auth };
export { firebase };
