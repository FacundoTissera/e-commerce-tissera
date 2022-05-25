 // Import the functions you need from the SDKs you need
 import { initializeApp } from "firebase/app";
 import { getFirestore } from "firebase/firestore";
 import { getAnalytics } from "firebase/analytics";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries
 
 // Your web app's Firebase configuration
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 const firebaseConfig = {
  apiKey: "AIzaSyC0rpQpEivel9KdsMZr0iwjIZ6j8X84_ao",
  authDomain: "maxi-kiosco-sorribas.firebaseapp.com",
  projectId: "maxi-kiosco-sorribas",
  storageBucket: "maxi-kiosco-sorribas.appspot.com",
  messagingSenderId: "992793948550",
  appId: "1:992793948550:web:84eb5c773f477ffa60bc07",
  measurementId: "G-W2DBT9Y44R"
 };
 
 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const analytics = getAnalytics(app);
export const db = getFirestore(app);