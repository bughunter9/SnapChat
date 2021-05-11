import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAkGM7FMJMLLE3csv0Vlk6Fgg71_Agws7c",
    authDomain: "snapchat-clone-86e26.firebaseapp.com",
    projectId: "snapchat-clone-86e26",
    storageBucket: "snapchat-clone-86e26.appspot.com",
    messagingSenderId: "48121105673",
    appId: "1:48121105673:web:71c73ee59934825f24d7d8",
    measurementId: "G-3WC9KCLL0M"
  };


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, storage, provider };