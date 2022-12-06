import { BASE_URL_WEATHER, API_KEY_WEATHER } from "./apiConfig.js";


const lat = 59.40; 
const lon = 17.95;

function treatHTTPResponseACB(response){ 
    if(response.status !== 200){throw new Error("API problem " + response.status); }
    return response.json();
}

function getCurrentWeather(){
    return fetch(BASE_URL_WEATHER+lat+'&'+lon+'&appid='+ API_KEY_WEATHER,{ 
    "method": "GET"
        }
    ).then(treatHTTPResponseACB)


}

export {getCurrentWeather};