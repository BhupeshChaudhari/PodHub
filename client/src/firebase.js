import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDRUuZsEdHvrbgOZ9flH4vsZH2IfARaovo",
  authDomain: "pod-hub-29037.firebaseapp.com",
  projectId: "pod-hub-29037",
  storageBucket: "pod-hub-29037.appspot.com",
  messagingSenderId: "140001647390",
  appId: "1:140001647390:web:40030dceb0bd959f51470f",
  measurementId: "G-B6H86XEB1D",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
