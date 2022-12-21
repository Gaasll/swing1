// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import firebase from "firebase/app";
import firebaseConfig from "/src/firebaseConfig.js";
import "firebase/auth";
import SwingModel from "./SwingModel";
require('firebase/database');

firebase.initializeApp(firebaseConfig);  
const auth = firebase.auth();

const REF="swingmood";
// firebase.database().ref(REF+"/test").set("dummy");

function createUser(email, password) {
    auth.createUserWithEmailAndPassword(email, password).then((userCredential) => {
    // Signed in 
    var user = userCredential.user;
    console.log(userCredential);
    // ...
    }).catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    // ..
  });
}

function signIn(email, password){
    auth.signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
        // ...
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
      });
}

function getCurrentUser(){
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/firebase.User
          var uid = user.uid;
          // ...
        } else {
          // User is signed out
          // ...
        }
      });
}

function firebaseModelPromise() {
    function makeBigPromiseACB(firebaseData) {
        // function makePromise(dishId){
        //     return getDishDetails(dishId);
        // }
        let selectedEmotions;
        if(firebaseData.val() && firebaseData.val().selectedEmotions){
            selectedEmotions = firebaseData.val().selectedEmotions;
        } else { selectedEmotions = [] }
        // const dishPromiseArray= Object.keys(dishes).map(makeDishPromiseCB);
        // let nrGuests;
        // if(firebaseData.val() && firebaseData.val().nrOfGuests){
        //     nrGuests = firebaseData.val().nrOfGuests;
        // } else { nrGuests=2; }
        function createModelACB(emotionsArray){
            let model = new SwingModel();
            model.selectedEmotions = emotionsArray;
            return model;
        }
        // return Promise.all(dishPromiseArray).then(createModelACB) // wait for all promise results 
        return createModelACB(selectedEmotions);
    }
    return firebase.database().ref(REF).once("value").then(makeBigPromiseACB);
}

function observerRecap(model) {
    function obsACB(payload){console.log(payload);}
    model.addObserver(obsACB);
}

function updateFirebaseFromModel(model) {

    function fireBaseObsACB(payload){
        if (payload && payload.username)
            firebase.database().ref(REF+"/username").set(model.username);

        if (payload && payload.playlist)
            firebase.database().ref(REF+"/playlist"+payload.playlist).set(model.setPlaylist);

        if (payload && payload.emotions)
            firebase.database().ref(REF+"/emotions/"+payload.emotions).set(model.emotions);

    }
    model.addObserver(fireBaseObsACB);
}   

function updateModelFromFirebase(model) {
    firebase.database().ref(REF+"/username").on("value", 
    function usernameChangedInFirebaseACB(firebaseData){ model.setUsername(firebaseData.val());});

    firebase.database().ref(REF+"/playlist").on("value", 
    function currentChangedInFirebaseACB(firebaseData){ model.setPlaylist(firebaseData.val());});

    // firebase.database().ref(REF+"/emotions/").on("child_added", 
    // function dishAddedInFirebaseACB(firebaseData){ model.setEmotions(firebaseData.val(), isChecked)});
    
}

export {firebaseModelPromise, updateFirebaseFromModel, updateModelFromFirebase, createUser, signIn}
//still needs a bunch of stuff