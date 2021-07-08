import firebase from "firebase/app"
import "firebase/auth"

export const auth = firebase.initializeApp({
  apiKey: "AIzaSyCIZbM173F0AGS07fF_DUaBC_3Zgxl5guc",
  authDomain: "unichat-287fb.firebaseapp.com",
  projectId: "unichat-287fb",
  storageBucket: "unichat-287fb.appspot.com",
  messagingSenderId: "574774801823",
  appId: "1:574774801823:web:f61134682c9996733379aa"
}).auth()
