import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA_7lQJYZsYCQkZfN4qY_mCWoBcUf7FEh8",
  authDomain: "dropbox-clone-55331.firebaseapp.com",
  projectId: "dropbox-clone-55331",
  storageBucket: "dropbox-clone-55331.appspot.com",
  messagingSenderId: "1996271624",
  appId: "1:1996271624:web:f5c047bc7e4e37d67f21bd",
  measurementId: "G-VJ3R55QHNL"
};


const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };