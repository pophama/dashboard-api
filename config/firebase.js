import {initializeApp} from 'firebase/app';
import {getDatabase} from "firebase/database";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDYr2w7wyc4aTMmXUKFiZLZ6k1_DFV_soE",
    authDomain: "test-smi-a21cb.firebaseapp.com",
    databaseURL: "https://test-smi-a21cb-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "test-smi-a21cb",
    storageBucket: "test-smi-a21cb.appspot.com",
    messagingSenderId: "705380234746",
    appId: "1:705380234746:web:f937e749fe4c4fee872043",
    measurementId: "G-3FYQFXVEZ7"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const db = getDatabase(firebaseApp);

export default db;
