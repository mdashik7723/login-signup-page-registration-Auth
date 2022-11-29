import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD8eRIB1jzbgcc9352uKjK6KoY1bzGBR-8",
  authDomain: "fir-auth1132.firebaseapp.com",
  projectId: "fir-auth1132",
  storageBucket: "fir-auth1132.appspot.com",
  messagingSenderId: "79089167942",
  appId: "1:79089167942:web:dca6b92e0754d07b702447",
  measurementId: "G-LHF03EGZX7"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth();

export { app, auth };
