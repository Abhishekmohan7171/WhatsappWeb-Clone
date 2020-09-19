// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDpE_ljEpVsWUH1vLWYV66bCPN51vVuA3I",
    authDomain: "whatsapp-clone-8fbc9.firebaseapp.com",
    databaseURL: "https://whatsapp-clone-8fbc9.firebaseio.com",
    projectId: "whatsapp-clone-8fbc9",
    storageBucket: "whatsapp-clone-8fbc9.appspot.com",
    messagingSenderId: "600778157773",
    appId: "1:600778157773:web:a6cd47bc376e6392650384",
    measurementId: "G-BZE1VGR1XX"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;