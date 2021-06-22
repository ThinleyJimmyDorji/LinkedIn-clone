import firebase from "firebase";
// import { connect } from "react-redux";

const firebaseConfig = {
  apiKey: "AIzaSyAD2jqlikA2AqI7zZJra1AMQmevlKi8Kcw",
  authDomain: "linkedin-clone-a61b6.firebaseapp.com",
  projectId: "linkedin-clone-a61b6",
  storageBucket: "linkedin-clone-a61b6.appspot.com",
  messagingSenderId: "1059124262569",
  appId: "1:1059124262569:web:e67d9c1abd363bac9ddbb8",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
