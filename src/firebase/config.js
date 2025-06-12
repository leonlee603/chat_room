import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, serverTimestamp } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyApUIHI2usJ56wNYxixgw0ECP3mEmR9Fsc",
  authDomain: "vue-chat-room-b9d99.firebaseapp.com",
  projectId: "vue-chat-room-b9d99",
  storageBucket: "vue-chat-room-b9d99.firebasestorage.app",
  messagingSenderId: "425154600139",
  appId: "1:425154600139:web:fa7b64a5cbba3d20398f4e",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const timestamp = serverTimestamp();
const auth = getAuth(firebaseApp);

export { firebaseApp, db, timestamp, auth };
