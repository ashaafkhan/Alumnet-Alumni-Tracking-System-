import firebase from "firebase/compat/app"
import "firebase/compat/database";
import {getAuth,GoogleAuthProvider} from "firebase/auth"
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAlLj_t6hKekakUVOqHWS0XYYoeFm9dNyI",
  authDomain: "alumnet-8b038.firebaseapp.com",
  projectId: "alumnet-8b038",
  storageBucket: "alumnet-8b038.firebasestorage.app",
  messagingSenderId: "1027701229114",
  appId: "1:1027701229114:web:9cd27fee10547b937e9703"
};

const fireDb = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(fireDb)
export const googleProvider = new GoogleAuthProvider(fireDb)
export const database = getFirestore(fireDb)
export default fireDb.database().ref();

