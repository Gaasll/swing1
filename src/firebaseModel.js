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

function createUser(email, password, username) {
    auth.createUserWithEmailAndPassword(email, password).then(() => {
        console.log('signed in');
        firebase.database().ref(REF+"/"+ getUser().uid +"/username").set(username);
    }).catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorCode);
    console.log(errorMessage);
  });
}

function signIn(email, password){
    auth.signInWithEmailAndPassword(email, password)
      .then(() => {
        // Signed in
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
        alert("Wrong password or email")
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
        let username, emotions, lastPlayed;
        if(firebaseData.val()) {
          username = firebaseData.val().username;
          emotions = firebaseData.val().emotions;
          lastPlayed = firebaseData.val().lastPlayed;
        }

        function createModelACB(user, emotionsObj, history){
            let model = new SwingModel(notify, user, emotionsObj, history);
            return model;
        }

        return createModelACB(username, emotions, lastPlayed);
    }

    const user = getUser();
    const uid = user ? user.uid : "";

    return firebase.database().ref(REF+"/"+uid).once("value").then(makeBigPromiseACB);
}

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

        if (payload && payload.emotions)
            firebase.database().ref(REF+"/" + user.uid +"/emotions").set(payload.emotions);

        if (payload && payload.lastPlayed)
            firebase.database().ref(REF+"/" + user.uid +"/lastPlayed").set(payload.lastPlayed);
      }
    model.addObserver(fireBaseObsACB);
}   

function updateModelFromFirebase(model) {
    const user = getUser();
    if (!user) {
      return;
    }

    firebase.database().ref(REF+"/" + user.uid + "/username").on("value", 
    function usernameChangedInFirebaseACB(firebaseData){
      model.setUsername(firebaseData.val());
    });

    firebase.database().ref(REF+"/" + user.uid + "/emotions").on("child_added", 
    function emotionsUpdatedInFirebase(firebaseData){
      model.setEmotions(firebaseData.key, firebaseData.val().checked)
    });

    firebase.database().ref(REF+"/" + user.uid + "/lastPlayed").on("value", 
    function lastPlayedUpdatedInFirebase(firebaseData){
      model.setLastPlayed(firebaseData.val());
    });
}

export {firebaseModelPromise, updateFirebaseFromModel, updateModelFromFirebase, createUser, signIn, signOut, getUser}