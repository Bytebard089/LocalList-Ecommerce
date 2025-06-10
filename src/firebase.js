import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAsT570XUrF6ex4SSwiNfoY67uo4uchtgA",
  authDomain: "vyapaarsetu-dd9fa.firebaseapp.com",
  projectId: "vyapaarsetu-dd9fa",
  storageBucket: "vyapaarsetu-dd9fa.appspot.com",
  messagingSenderId: "1088332066658",
  appId: "1:1088332066658:web:d72764686169be1e77063b",
  measurementId: "G-PLP9VJPF0G"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);