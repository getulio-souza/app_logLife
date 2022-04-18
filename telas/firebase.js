// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
import { initializeApp } from 'firebase/app';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC5sWl8tPsViH-hNa8qshidkmUMUe86gFU",
  authDomain: "loglife-firebase.firebaseapp.com",
  projectId: "loglife-firebase",
  storageBucket: "loglife-firebase.appspot.com",
  messagingSenderId: "1009999266180",
  appId: "1:1009999266180:web:b917331eef1c6b084bddd1",
  measurementId: "G-VDTL3G1NZ6"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
}
else {
    app = firebase.app()
}

const auth = firebase.auth()

export { auth };



// const analytics = getAnalytics(app);