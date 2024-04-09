
import { initializeApp } from "firebase/app";
import {getDatabase} from 'firebase/database';
const firebaseConfig = {
  apiKey: "AIzaSyCeNByr31Vn39snuabx4rDPTApMIQIfZs0",
  databaseURL: "https://sensoreshomme-default-rtdb.firebaseio.com/",
  authDomain: "sensoreshomme.firebaseapp.com",
  databaseURL: "https://sensoreshomme-default-rtdb.firebaseio.com",
  projectId: "sensoreshomme",
  storageBucket: "sensoreshomme.appspot.com",
  messagingSenderId: "772524138237",
  appId: "1:772524138237:web:d578c81d15590298bfe894"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
export {database}