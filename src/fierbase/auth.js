// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBnp0UFxlJt-uO-Vq545ScrZSmqMUh7tyI",
  authDomain: "fir-login-page-4789d.firebaseapp.com",
  projectId: "fir-login-page-4789d",
  storageBucket: "fir-login-page-4789d.appspot.com",
  messagingSenderId: "92367226452",
  appId: "1:92367226452:web:92ff6fa36e65d6d560cfc1",
  measurementId: "G-N3LLDQRMK9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;