import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAPoQbIsMyt6a_6qPNw3IaNn4xXE7OcUgc",
  authDomain: "researchprojectmanagementtool.firebaseapp.com",
  projectId: "researchprojectmanagementtool",
  storageBucket: "researchprojectmanagementtool.appspot.com",
  messagingSenderId: "1036144485927",
  appId: "1:1036144485927:web:d8145426038bdb9b30d002",
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(
  app,
  "gs://researchprojectmanagementtool.appspot.com"
);
export default storage;
