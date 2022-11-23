import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD-M_9iZjvu6dYnX3prW-iVJtq3FTuTwmw",
  authDomain: "todo-react-e0daf.firebaseapp.com",
  projectId: "todo-react-e0daf",
  storageBucket: "todo-react-e0daf.appspot.com",
  messagingSenderId: "241619273050",
  appId: "1:241619273050:web:64d0e25ec63ece01821f63"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { db, auth, provider };
