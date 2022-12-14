// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { initializeApp } from "firebase/app";
import firebaseConfig from "/src/firebaseConfig.js";
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//firebase.initializeApp(firebaseConfig);  

//  REF is the “root” Firebase path. NN is your TW2_TW3 group number
const REF="swingmood";

firebase.database().ref(REF+"/test").set("dummy");