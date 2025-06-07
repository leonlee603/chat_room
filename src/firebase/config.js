// import firebase from "firebase/app";
// import "firebase/firestore";
// import "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyApUIHI2usJ56wNYxixgw0ECP3mEmR9Fsc",
  authDomain: "vue-chat-room-b9d99.firebaseapp.com",
  projectId: "vue-chat-room-b9d99",
  storageBucket: "vue-chat-room-b9d99.firebasestorage.app",
  messagingSenderId: "425154600139",
  appId: "1:425154600139:web:fa7b64a5cbba3d20398f4e",
};

// //init firebase
// firebase.initializeApp(firebaseConfig);

// const projectAuth = firebase.auth();

// const projectFirestore = firebase.firestore();
// const timestamp = firebase.firestore.FieldValue.serverTimestamp;

// export { projectAuth, projectFirestore, timestamp };
const firebaseApp = initializeApp(firebaseConfig);

export { firebaseApp };
