import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC5BArd7TCmL3VQRpXiaBNQnxOHfZVDxpI",
  authDomain: "expo9-9d787.firebaseapp.com",
  projectId: "expo9-9d787",
  storageBucket: "expo9-9d787.appspot.com",
  messagingSenderId: "250584030685",
  appId: "1:840946034542:android:2482bb51ec180210b6437f",
};

export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
export const storage = getStorage(app);
