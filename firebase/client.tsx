// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB6h36Uct94jlZjecyHmMZur9pOUENLr6M",
  authDomain: "prepbuddy-fac0e.firebaseapp.com",
  projectId: "prepbuddy-fac0e",
  storageBucket: "prepbuddy-fac0e.firebasestorage.app",
  messagingSenderId: "431257174845",
  appId: "1:431257174845:web:7ba8b99519c927770d3b54",
  measurementId: "G-2QDSLQR3TH"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth= getAuth(app);
export const db = getFirestore(app);