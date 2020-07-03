import firebase from 'firebase/app';
import 'firebase/auth';
// import 'firebase/firestore';
import 'firebase/database';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD6mi366_GqZ4MKar7ahc8o832TeQFdVqk",
    authDomain: "reactjs-notes-a250f.firebaseapp.com",
    databaseURL: "https://reactjs-notes-a250f.firebaseio.com",
    projectId: "reactjs-notes-a250f",
    storageBucket: "reactjs-notes-a250f.appspot.com",
    messagingSenderId: "878187454775",
    appId: "1:878187454775:web:ee3c49dcd7c5c68174bab2"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export const database = firebase.database();

  export default firebase;