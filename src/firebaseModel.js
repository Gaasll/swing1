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
firebase.database().ref(REF+"/test").set("dummy");


function observerRecap(model) {
    function obsACB(payload){console.log(payload);}
    model.addObserver(obsACB);
}

function updateFirebaseFromModel(model) {

    function fireBaseObsACB(payload){
        if (payload && payload.username)
            firebase.database().ref(REF+"/numberOfGuests").set(model.username);

        if (payload && payload.searchParams)
                firebase.database().ref(REF+"/currentDish").set(model.searchParams);

        if (payload && payload.playlist)
            firebase.database().ref(REF+"/dishes/"+payload.dishAdded.id).set(model.playlist);

        if (payload && payload.emotions)
            firebase.database().ref(REF+"/dishes/"+payload.dishAdded.id).set(model.emotions);

    }
    model.addObserver(fireBaseObsACB);
}   

//still needs a bunch of stuff
