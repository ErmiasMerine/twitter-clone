import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDJvib-APUqD5yAQRI7-V1FhcjurT3QqlM",
    authDomain: "twitter-clone-b022a.firebaseapp.com",
    projectId: "twitter-clone-b022a",
    storageBucket: "twitter-clone-b022a.appspot.com",
    messagingSenderId: "809092263817",
    appId: "1:809092263817:web:9affc01ab29d97e51ebb58",
    measurementId: "G-6JZPQLTV8T"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  const auth = firebase.auth();

  export { auth, db };