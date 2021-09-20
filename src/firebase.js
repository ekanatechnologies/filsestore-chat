// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDjxvd23b7Riz354bygbpjst5PJtSnCiqY",
  authDomain: "discord-clone-2-b16ec.firebaseapp.com",
  projectId: "discord-clone-2-b16ec",
  storageBucket: "discord-clone-2-b16ec.appspot.com",
  messagingSenderId: "128705228262",
  appId: "1:128705228262:web:7e46508aec874205147a27",
  measurementId: "G-JSPVBJ32TV"
};
  const firebaseApp=firebase.initializeApp(firebaseConfig)
  const db=firebaseApp.firestore();
  const auth=firebaseApp.auth();
const provider= new firebase.auth.GoogleAuthProvider();


  
  export{auth,provider};
  export default db;