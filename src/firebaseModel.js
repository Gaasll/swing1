// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { initializeApp } from "firebase/app";
import firebaseConfig from "/src/firebaseConfig.js";
import SwingModel from "./SwingModel";
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//firebase.initializeApp(firebaseConfig);  

//  REF is the “root” Firebase path. NN is your TW2_TW3 group number
const REF="swingmood";
//firebase.database().ref(REF+"/test").set("dummy");


function observerRecap(model) {
    function obsACB(payload){console.log(payload);}
    model.addObserver(obsACB);
}

function updateFirebaseFromModel(model) {

    function fireBaseObsACB(payload){
        if (payload && payload.username)
            firebase.database().ref(REF+"/username").set(model.username);

        if (payload && payload.playlist)
            firebase.database().ref(REF+"/playlist"+payload.dishAdded.id).set(model.setPlaylist);

        if (payload && payload.emotions)
            firebase.database().ref(REF+"/emotions/"+payload.dishAdded.id).set(model.emotions);

    }
    model.addObserver(fireBaseObsACB);
}   

function updateModelFromFirebase(model) {
    firebase.database().ref(REF+"/numberOfGuests").on("value", 
    function guestsChangedInFirebaseACB(firebaseData){ model.setNumberOfGuests(firebaseData.val());});

    firebase.database().ref(REF+"/currentDish").on("value", 
    function currentChangedInFirebaseACB(firebaseData){ model.setCurrentDish(firebaseData.val());});

    firebase.database().ref(REF+"/dishes/").on("child_added", 
    function dishAddedInFirebaseACB(data){
        function isAlreadyInModelACB(dish){return (+data.key)===dish.id;}
        if(!model.dishes.find(isAlreadyInModelACB)) getDishDetails(+data.key).then(
            function addDishCB(dish){model.addToMenu(dish)})
    })
    
    firebase.database().ref(REF+"/dishes/").on("child_removed", 
    function dishRemovedInFirebaseACB(firebaseData){ model.removeFromMenu({id:+firebaseData.key});});
    return;
}

//still needs a bunch of stuff