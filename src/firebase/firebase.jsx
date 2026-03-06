import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDg4qdXd5OlNNViYKnvOwAZeqtPwkfs71c",
  authDomain: "e-com-d479f.firebaseapp.com",
  projectId: "e-com-d479f",
  storageBucket: "e-com-d479f.firebasestorage.app",
  messagingSenderId: "378554916576",
  appId: "1:378554916576:web:1930b31d581687bc533a85",
  measurementId: "G-6NCG1WT9R1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Auth and Firestore
export const auth = getAuth(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();

export default app;