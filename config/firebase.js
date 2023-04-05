// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import Constants from 'expo-constants';

// Your web app's Firebase configuration



const firebaseConfig = {
  apiKey: Constants.manifest.extra.apikey ,
  authDomain: Constants.manifest.extra.authDomain ,
  projectId: Constants.manifest.extra.projectId ,
  storageBucket: Constants.manifest.extra.storageBucket ,
  messagingSenderId: Constants.manifest.extra.messagingSenderId,
  appId:Constants.manifest.extra.appId
};

// Initialize Firebase
const app =initializeApp(firebaseConfig);
export const auth = getAuth();
export const database = getFirestore();