// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB_dFMJOR1mQbpbIah93wYkYPs0YybLjUc",
  authDomain: "react-dragon-news-projec-7dc1a.firebaseapp.com",
  projectId: "react-dragon-news-projec-7dc1a",
  storageBucket: "react-dragon-news-projec-7dc1a.appspot.com",
  messagingSenderId: "55484588108",
  appId: "1:55484588108:web:9c6ee40f0282e5c646d4e9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export default auth;
