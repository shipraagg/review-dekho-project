import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDvjk-WtC-qLhAwVGAZskKpWYP-gAdvbas",
  authDomain: "filmyverse-38781.firebaseapp.com",
  projectId: "filmyverse-38781",
  storageBucket: "filmyverse-38781.appspot.com",
  messagingSenderId: "328066640586",
  appId: "1:328066640586:web:7e3d472667381564a02233",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const moviesRef = collection(db, "movies");
export const reviewsRef = collection(db, "reviews");
export const usersRef = collection(db, "users");

export default app;
