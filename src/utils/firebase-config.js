import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyCxDYPiSX13stuceOHMf46VDJI_CbqO2Og",
  authDomain: "react-netfliz.firebaseapp.com",
  projectId: "react-netfliz",
  storageBucket: "react-netfliz.appspot.com",
  messagingSenderId: "98360962443",
  appId: "1:98360962443:web:a2e265b5d3a441e698d38e",
  measurementId: "G-369CYDC2F3"
};


const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app)