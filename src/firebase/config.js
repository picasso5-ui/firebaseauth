import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/fireStore'
import {getStorage} from 'firebase/storage'

 export const firebaseConfig = {
  apiKey: "AIzaSyD88Y9lDNZrvAxc0XesX6u7Je7PpYt47Tg",
  authDomain: "q-link-30ff9.firebaseapp.com",
  projectId: "q-link-30ff9",
  storageBucket: "q-link-30ff9.appspot.com",
  messagingSenderId: "296894978845",
  appId: "1:296894978845:web:0459fbfb638b7320a15ff4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
 export const db = getFirestore(app)
 export const storage = getStorage(app) 

 export default app;