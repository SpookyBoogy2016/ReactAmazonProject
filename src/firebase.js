// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAQ__LwWKeiZ6AumDYzyFuB_EWonPBIk1Y",
  authDomain: "shopping-app-39ca4.firebaseapp.com",
  projectId: "shopping-app-39ca4",
  storageBucket: "shopping-app-39ca4.appspot.com",
  messagingSenderId: "545377490724",
  appId: "1:545377490724:web:a8ad551246d2a05f8645b1",
  measurementId: "G-50YTJQDY9L",
};

const app = initializeApp(firebaseConfig);

const db = app.firestore();
const auth = app.auth();

export { db, auth };
