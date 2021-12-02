// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {};

const app = initializeApp(firebaseConfig);

export { getAuth, createUserWithEmailAndPassword };
