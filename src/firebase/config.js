import firebase from 'firebase/app'
import 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyAvGk35zvayUHrD1LVQkB9B4HEeU_lhp7A",
    authDomain: "simple-contact-form-4ea9c.firebaseapp.com",
    projectId: "simple-contact-form-4ea9c",
    storageBucket: "simple-contact-form-4ea9c.appspot.com",
    messagingSenderId: "189403536304",
    appId: "1:189403536304:web:d76021244e4281915f9475"
  };


  firebase.initializeApp(firebaseConfig)

  // init firestore
  const projectFirestore = firebase.firestore()

  export { projectFirestore }