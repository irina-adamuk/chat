import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyA5Hytnjlzv9pNPoe-f6sv53XTkWF205dY",
  authDomain: "chat-react-a7acb.firebaseapp.com",
  databaseURL:
    "https://chat-react-a7acb-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "chat-react-a7acb",
  storageBucket: "chat-react-a7acb.appspot.com",
  messagingSenderId: "519692323521",
  appId: "1:519692323521:web:449b7521a984071392e240",
  measurementId: "G-GMJDE0SV63",
};

export const firebase = initializeApp(firebaseConfig);
export const analytics = getAnalytics(firebase);
export const auth = getAuth(firebase);
export const database = getDatabase(firebase);

