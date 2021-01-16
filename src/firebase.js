import firebase from 'firebase';



const firebaseConfig = {
  apiKey: "AIzaSyDlUBPEaUPufupnelOluGgXJua3-WSaBS0",
  authDomain: "first-project-7d0c8.firebaseapp.com",
  projectId: "first-project-7d0c8",
  storageBucket: "first-project-7d0c8.appspot.com",
  messagingSenderId: "220882570987",
  appId: "1:220882570987:web:e7ef71c456e8e208c1b8ae"
};
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db,auth};