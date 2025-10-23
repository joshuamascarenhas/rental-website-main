// lib/firebase.ts
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyD3ts5v1CMGU2XyO0ASQV9bZjPQgl1hnJA",
  authDomain: "safe-rental-marketplace.firebaseapp.com",
  projectId: "safe-rental-marketplace",
  storageBucket: "safe-rental-marketplace.firebasestorage.app",
  messagingSenderId: "1022783533365",
  appId: "1:1022783533365:web:bdd63a40682e18b2d01c7c",
  measurementId: "G-1Q2BFM6300"
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
