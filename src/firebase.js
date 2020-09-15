import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyBtfMgFrqlzPMIgiZDeuRxPyEhk5vpEd04",
  authDomain: "reactburger-ab06a.firebaseapp.com",
  databaseURL: "https://reactburger-ab06a.firebaseio.com",
  projectId: "reactburger-ab06a",
  storageBucket: "reactburger-ab06a.appspot.com",
  messagingSenderId: "79359611180",
  appId: "1:79359611180:web:771bd8057670c3e0975c89",
  measurementId: "G-7W6XEWM7FB",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
