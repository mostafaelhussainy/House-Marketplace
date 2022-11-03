import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAN1AyzF7lbq8s-Pg1vNZ2AC5XKXK68PHs",
  authDomain: "house-marketplace-app-50921.firebaseapp.com",
  projectId: "house-marketplace-app-50921",
  storageBucket: "house-marketplace-app-50921.appspot.com",
  messagingSenderId: "815110133628",
  appId: "1:815110133628:web:a63cec778907e2867836f9"
};

// Initialize Firebase
initializeApp(firebaseConfig)
export const db = getFirestore()
