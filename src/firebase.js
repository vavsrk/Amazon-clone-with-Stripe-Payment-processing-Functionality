import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyDeBq3Q7vQF2gaOKNJY5BMQ4HXJeuMnCvg",
  authDomain: "clone-99d79.firebaseapp.com",
  databaseURL: "https://clone-99d79.firebaseio.com",
  projectId: "clone-99d79",
  storageBucket: "clone-99d79.appspot.com",
  messagingSenderId: "930650150975",
  appId: "1:930650150975:web:36db0674353bf273c7c08a",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();

export { db, auth };
