// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDRAke1FHtXtCb7HUsmBCBbVbqhi-yCxtI",
  authDomain: "firea9uth.firebaseapp.com",
  projectId: "firea9uth",
  storageBucket: "firea9uth.appspot.com",
  messagingSenderId: "913137971066",
  appId: "1:913137971066:web:b3f6da9a1631539c1770c3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
