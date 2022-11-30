// Here we are setting up our Firebase API! This is the information that we will use to initalize our app and connect to the backend of Firebase.

// The * lets us import everything from firebase so that we can readily use it when needed:

import * as firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';

// Your web app's Firebase configuration

const firebaseConfig = {
    apiKey: "AIzaSyAxNZKpRU7I1SXnUzoZ0VokYogzQ0lS7Yk",
    authDomain: "my-janky-instagram.firebaseapp.com",
    projectId: "my-janky-instagram",
    storageBucket: "my-janky-instagram.appspot.com",
    messagingSenderId: "1069220490853",
    appId: "1:1069220490853:web:5fffd677e9492106a7608c"
  };


  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

//   Initalize the firestore service

// We save both of these functions into variables for when we easily want to interact with either one of these

const firebaseStorage = firebase.storage();

const fireStore = firebase.fireStore();

export { firebaseStorage, fireStore };
