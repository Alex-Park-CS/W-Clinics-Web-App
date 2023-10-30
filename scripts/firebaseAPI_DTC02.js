//----------------------------------------
//  Your web app's Firebase configuration
//----------------------------------------
var firebaseConfig = {
    apiKey: "AIzaSyBhOM2qpNzj2eRSHevJ8H9bbuXB28_bet0",
    authDomain: "comp-1800-dtc02.firebaseapp.com",
    projectId: "comp-1800-dtc02",
    storageBucket: "comp-1800-dtc02.appspot.com",
    messagingSenderId: "361401086901",
    appId: "1:361401086901:web:3afef4c3fb9c06e29e1ffc"
};

//--------------------------------------------
// initialize the Firebase app
// initialize Firestore database if using it
//--------------------------------------------
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

