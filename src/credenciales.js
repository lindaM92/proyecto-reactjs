// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBMbe7jeuz5McIMqS5bt0xtvcrYcUSYsFc",
  authDomain: "react-js-e988e.firebaseapp.com",
  projectId: "react-js-e988e",
  storageBucket: "react-js-e988e.appspot.com",
  messagingSenderId: "565393508132",
  appId: "1:565393508132:web:ce29347908f466da1f55b1"
};

// Inicializa Firebase
const appFirebase = initializeApp(firebaseConfig);
export default appFirebase; // exportacion por defecto de firebase para utilizarlo de 
// manera modular en los componenetes que necesite en mi proyecto