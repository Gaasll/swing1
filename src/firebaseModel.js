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
firebase.database().ref(REF+"/test").set("dummy");

function createUser(email, password) {
    console.log('creating user...');
    auth.createUserWithEmailAndPassword(email, password).then((userCredential) => {
    // Signed in 
    console.log('signed in');
    //var user = userCredential.user;
    console.log(userCredential);
    // ...
    }).catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorCode);
    console.log(errorMessage);
    // ..
  });
}

function signIn(email, password){
    auth.signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        //var user = userCredential.user;
        // ...
        console.log(userCredential);
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
      });
}

function signOut(){
  firebase.auth().signOut().then(() => {
    console.log("Signed out");
    return true;
    // Sign-out successful.
  }).catch((error) => {
    console.log('signout failed');
    console.err(error);
    // An error happened.
  });
}

function fbAuthObs(){
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/firebase.User
          var uid = user.uid;
          console.log(uid);
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
            model.addObserver(this.fbAuthObs.bind(this));
            return model;
        }
        // return Promise.all(dishPromiseArray).then(createModelACB) // wait for all promise results 
        return createModelACB(selectedEmotions);
    }
    return firebase.database().ref(REF).once("value").then(makeBigPromiseACB);
}

//function observerRecap(model) {
//    function obsACB(payload){console.log(payload);}
//    model.addObserver(obsACB);
//}

function getUID(model){
  firebase.auth().onAuthStateChanged((user) => {
    console.log(user);
    if (user) {
      console.log("here is reached!")
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      model.setUID(user.uid);
    }
    else
    {
      model.setUID(null);
    }
  });
}

function updateFirebaseFromModel(model) {


    function fireBaseObsACB(payload){
        if (payload && payload.username)
            firebase.database().ref(REF+"/"+ model.uid +"/username").set(model.username);

        if (payload && payload.playlist)
            firebase.database().ref(REF+"/"+ model.uid +"/playlist"+payload.playlist).set(model.playlist);

        if (payload && payload.emotions)
            firebase.database().ref(REF+"/" + model.uid +"/emotions").set(model.selectedEmotions);

      }
    model.addObserver(fireBaseObsACB);
}   

function updateModelFromFirebase(model) {
    firebase.database().ref(REF+"/" + getUID + "/username").on("value", 
    function usernameChangedInFirebaseACB(firebaseData){ model.setUsername(firebaseData.val());});

    firebase.database().ref(REF+ "/" + getUID + "/playlist").on("value", 
    function currentChangedInFirebaseACB(firebaseData){ model.setPlaylist(firebaseData.val());});

    // firebase.database().ref(REF+"/emotions/").on("child_added", 
    // function dishAddedInFirebaseACB(firebaseData){ model.setEmotions(firebaseData.val(), isChecked)});
    
}

export {firebaseModelPromise, updateFirebaseFromModel, updateModelFromFirebase, createUser, signIn, signOut, fbAuthObs, getUID}
//still needs a bunch of stuff