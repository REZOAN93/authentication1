// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBWDcBGF3KZBI3mHPE3fqzqh3W1HxDwqKE",
  authDomain: "fir-be2ef.firebaseapp.com",
  projectId: "fir-be2ef",
  storageBucket: "fir-be2ef.appspot.com",
  messagingSenderId: "255218846431",
  appId: "1:255218846431:web:76bcc720b95dffd38b776a",
  measurementId: "G-JWT4DVSZZV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;
