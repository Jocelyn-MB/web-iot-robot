import firebase from 'firebase/compat/app';
import 'firebase/compat/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDJK0hA2dKK6M4n02yC-YfXNzNYbbeZ9ZM",
    authDomain: "robot-404f3.firebaseapp.com",
    projectId: "robot-404f3",
    storageBucket: "robot-404f3.appspot.com",
    messagingSenderId: "730076095726",
    appId: "1:730076095726:web:50cddf60d137d80bc57fff",
    measurementId: "G-P2KM6LPCGT"
  };

  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }

export const auth = firebase.auth(); // Exportamos la instancia de auth

export default firebase;