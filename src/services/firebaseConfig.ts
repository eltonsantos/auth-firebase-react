import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAQG5mrxftwYVfxa9G0heVVL2KCD0vmWcY",
  authDomain: "auth-firebase-react-a1649.firebaseapp.com",
  projectId: "auth-firebase-react-a1649",
  storageBucket: "auth-firebase-react-a1649.appspot.com",
  messagingSenderId: "893965939570",
  appId: "1:893965939570:web:14f4053ddca0d0bd44a3eb",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
