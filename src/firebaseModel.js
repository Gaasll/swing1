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

function firebaseModelPromise(notify) {
    function makeBigPromiseACB(firebaseData) {
        let emotions;
        if(firebaseData.val() && firebaseData.val().emotions){
            emotions = firebaseData.val().emotions;
            console.log(emotions);
        } else { emotions = null }
        // let nrGuests;
        // if(firebaseData.val() && firebaseData.val().nrOfGuests){
        //     nrGuests = firebaseData.val().nrOfGuests;
        // } else { nrGuests=2; }
        function createModelACB(emotionsObj){
            let model = new SwingModel(notify, emotionsObj);
            return model;
        }
        // return Promise.all(dishPromiseArray).then(createModelACB) // wait for all promise results 
        return createModelACB(emotions);
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
            firebase.database().ref(REF+"/"+ model.uid +"/playlist").set(payload.playlist);

        if (payload && payload.emotions)
            firebase.database().ref(REF+"/" + model.uid +"/emotions").set(payload.emotions);

        if (payload && payload.lastPlayed)
            firebase.database().ref(REF+"/" + model.uid +"/lastPlayed").set(payload.emotions);
      }
    model.addObserver(fireBaseObsACB);
}   

function updateModelFromFirebase(model) {
  firebase.auth().onAuthStateChanged((user) => {
    //console.log(user);
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      model.setUID(user.uid);
      getFirebaseData();
    }
    else
    {
      model.setUID(null);
    }
  });

  function getFirebaseData() {
    firebase.database().ref(REF+"/" + model.uid + "/username").on("value", 
    function usernameChangedInFirebaseACB(firebaseData){
      model.setUsername(firebaseData.val());
    });

    firebase.database().ref(REF+ "/" + model.uid + "/playlist").on("value", 
    function currentChangedInFirebaseACB(firebaseData){
      model.setPlaylist(firebaseData.val());
    });

    firebase.database().ref(REF+"/" + model.uid + "/emotions").on("child_added", 
    function emotionsUpdatedInFirebase(firebaseData){
      model.setEmotions(firebaseData.key, firebaseData.val().checked)
    });

    firebase.database().ref(REF+"/" + model.uid + "/lastPlayed").on("child_added", 
    function lastPlayedUpdatedInFirebase(){
      model.extractPlayerData()
    });
  }
}

export {firebaseModelPromise, updateFirebaseFromModel, updateModelFromFirebase, createUser, signIn, signOut, fbAuthObs, getUID}
//still needs a bunch of stuff