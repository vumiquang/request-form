import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDFMDl2rBDRtm7AVQQVx5eRroonb7Og9NY",
  authDomain: "request-form-a4fa9.firebaseapp.com",
  projectId: "request-form-a4fa9",
  storageBucket: "request-form-a4fa9.appspot.com",
  messagingSenderId: "239761943250",
  appId: "1:239761943250:web:a7f544d17649efb9c71b0b",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

