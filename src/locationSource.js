import {BASE_URL_LOCATION} from "./apiConfig.js";

function getLocation(){
    return fetch(BASE_URL_LOCATION, {
        method: "GET",
    },)
    .then(response => response.json())
    .then(data => {return {lat: data.latitude, lon: data.longitude}})
}

export {getLocation};