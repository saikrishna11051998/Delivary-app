import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAMfAO3onC2_6ZegvrC4EUPf2gORDvjTZQ",
  authDomain: "foodapp2-31a7a.firebaseapp.com",
  projectId: "foodapp2-31a7a",
  storageBucket: "foodapp2-31a7a.appspot.com",
  messagingSenderId: "928098473904",
  appId: "1:928098473904:web:c1933e6d3882c4558be875"
};

if(!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig); 
}

export {firebase};