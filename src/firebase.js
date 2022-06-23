import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCKGgHnqXfvV39TDT2Ke4h2OovGkMLZJDQ",
  authDomain: "tesla-clone-cb336.firebaseapp.com",
  projectId: "tesla-clone-cb336",
  storageBucket: "tesla-clone-cb336.appspot.com",
  messagingSenderId: "85591301094",
  appId: "1:85591301094:web:fc2683e5d721bd8ebfd427"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebaseApp.auth();

export { auth };
