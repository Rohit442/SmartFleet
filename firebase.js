// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB2lqOxGmMnTaSlWWssDktXgaiV-bEJewU",
  authDomain: "fir-auth-ef3e8.firebaseapp.com",
  projectId: "fir-auth-ef3e8",
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

export { auth };
