// Import the functions you need from the SDKs you need

import * as firebase from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBBPh0TV4Ne7Nv8Nv22YQr_HOtn3nGre2o",
  authDomain: "tienda-online-santos-malbran.firebaseapp.com",
  projectId: "tienda-online-santos-malbran",
  storageBucket: "tienda-online-santos-malbran.appspot.com",
  messagingSenderId: "1525407099",
  appId: "1:1525407099:web:39fa077b91f9e4e3b2f1de",
  measurementId: "G-GV36992571"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const db = getFirestore(app)
