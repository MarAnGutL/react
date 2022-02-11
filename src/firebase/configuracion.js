import {initializeApp} from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCg811ZwsJqvoJAEXt3fG_z7cjJeAWhJ7Y",
    authDomain: "proyecto-634d2.firebaseapp.com",
    databaseURL: "https://proyecto-634d2-default-rtdb.firebaseio.com",
    projectId: "proyecto-634d2",
    storageBucket: "proyecto-634d2.appspot.com",
    messagingSenderId: "535780705342",
    appId: "1:535780705342:web:79afefc0040a2665707d6f"
};

  // Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
// const db = firebase.firestore();

export {
    db,
    app
}