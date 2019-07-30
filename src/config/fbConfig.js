import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBRq4O95vR2S0dktHrjeQAeMtaf8REqa8I",
  authDomain: "project-hub-ce158.firebaseapp.com",
  databaseURL: "https://project-hub-ce158.firebaseio.com",
  projectId: "project-hub-ce158",
  storageBucket: "",
  messagingSenderId: "972748524562",
  appId: "1:972748524562:web:e9691b812e3c2063"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
