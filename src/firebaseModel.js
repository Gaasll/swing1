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

function createUser(email, password, username) {
    console.log('creating user...');
    auth.createUserWithEmailAndPassword(email, password).then(() => {
        console.log('signed in');
        //console.log(userCredential);

        firebase.database().ref(REF+"/"+ getUser().uid +"/username").set(username);
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
      .then(() => {
        // Signed in
        //var user = userCredential.user;
        // ...
        //console.log(userCredential);
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

function firebaseModelPromise(notify) {
    
    function makeBigPromiseACB(firebaseData) {
        let emotions;
        if(firebaseData.val() && firebaseData.val().emotions) {
            emotions = firebaseData.val().emotions;
        }
        else {
            emotions = null;
        }

        function createModelACB(emotionsObj){
            let model = new SwingModel(notify, emotionsObj);
            return model;
        }

        return createModelACB(emotions);
    }

    const user = getUser();
    const uid = user ? user.uid : "";

    return firebase.database().ref(REF+"/"+uid).once("value").then(makeBigPromiseACB);
}

//function observerRecap(model) {
//    function obsACB(payload){console.log(payload);}
//    model.addObserver(obsACB);
//}

function getUser(){
  const user = firebase.auth().currentUser;
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    return user;
  }
  else
  {
    return null;
  }
}

function updateFirebaseFromModel(model) {
    function fireBaseObsACB(payload){
        const user = getUser();
        if (!user) {
          return;
        }

        if (payload && payload.username)
            firebase.database().ref(REF+"/"+ user.uid +"/username").set(model.username);

        if (payload && payload.playlist)
            firebase.database().ref(REF+"/"+ user.uid +"/playlist"+payload.playlist).set(model.playlist);

        if (payload && payload.emotions)
            firebase.database().ref(REF+"/" + user.uid +"/emotions").set(payload.emotions);

      }
    model.addObserver(fireBaseObsACB);
}   

function updateModelFromFirebase(model) {
    const user = getUser();
    if (!user) {
      return;
    }

  //function getFirebaseData() {
    firebase.database().ref(REF+"/" + user.uid + "/username").on("value", 
    function usernameChangedInFirebaseACB(firebaseData){
      model.setUsername(firebaseData.val());
    });

    firebase.database().ref(REF+ "/" + user.uid + "/playlist").on("value", 
    function currentChangedInFirebaseACB(firebaseData){
      model.setPlaylist(firebaseData.val());
    });

    firebase.database().ref(REF+"/" + user.uid + "/emotions").on("child_added", 
    function emotionsUpdatedInFirebase(firebaseData){
      model.setEmotions(firebaseData.key, firebaseData.val().checked)
    });
  //}
}

export {firebaseModelPromise, updateFirebaseFromModel, updateModelFromFirebase, createUser, signIn, signOut, getUser}
//still needs a bunch of stuff