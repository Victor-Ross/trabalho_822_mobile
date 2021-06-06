import firebase from 'firebase';


const firebaseConfig = {
  apiKey: "AIzaSyDQAdS5VIhvO5lxobYlwOYTdl113WsrN-8",
  authDomain: "grupou-enoix.firebaseapp.com",
  projectId: "grupou-enoix",
  storageBucket: "grupou-enoix.appspot.com",
  messagingSenderId: "794050650848",
  appId: "1:794050650848:web:4c45839141e3e14286e685"
};


// Initialize Firebase
if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}