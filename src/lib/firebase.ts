import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCORENW0MqKwi46JwKqFVYFZ3Tei9lY0sg",
  authDomain: "infcoded-labs.firebaseapp.com",
  projectId: "infcoded-labs",
  storageBucket: "infcoded-labs.firebasestorage.app",
  messagingSenderId: "813451921843",
  appId: "1:813451921843:web:aa3388539d632ba863e3c6"
};

// Initialize Firebase only if it hasn't been initialized already
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);

export { app, db };
