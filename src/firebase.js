import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDPk_1cMRJa6yttGWMlYCLrbKJbvah9Nds",
  authDomain: "quora-clone-f6314.firebaseapp.com",
  projectId: "quora-clone-f6314",
  storageBucket: "quora-clone-f6314.appspot.com",
  messagingSenderId: "814522325073",
  appId: "1:814522325073:web:5253a12036f3a7a9d58070"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
