// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
/* const firebaseConfig = {
  apiKey: "AIzaSyBBv_dSZX7BVK_dfvJNmwE7umnZO9Pq288",
  authDomain: "assignment-11-1f233.firebaseapp.com",
  projectId: "assignment-11-1f233",
  storageBucket: "assignment-11-1f233.appspot.com",
  messagingSenderId: "384704814473",
  appId: "1:384704814473:web:9ae95ace247e7969df5558"
}; */
const firebaseConfig = {
    apiKey: import.meta.env.VITE_APIKEY,
    authDomain: import.meta.env.VITE_AUTHDOMAIN,
    projectId: import.meta.env.VITE_PROJECTID,
    storageBucket: import.meta.env.VITE_STORAGEBUCKET,
    messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
    appId: import.meta.env.VITE_APPID,
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;