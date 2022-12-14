import { BASE_URL_WEATHER, API_KEY_WEATHER } from "./apiConfig.js";


const lat = 59.40; 
const lon = 17.95;

function formatWeatherDataACB(responseData){
    let data = {weather: responseData.weather[0].main,
                country: responseData.name,
                icon:    responseData.weather[0].icon,
                temperature: responseData.main.temp,
            };
    console.log(responseData);
    return data;
}


function treatHTTPResponseACB(response){
    if(response.status !== 200){throw new Error("API problem " + response.status); }
    return response.json();
}

function getCurrentWeatherInfo(){
    let searchParams = new URLSearchParams({
        lat: lat,
        lon: lon,
        appid: API_KEY_WEATHER,
        units: "metric",
    })
    return fetch(BASE_URL_WEATHER + searchParams, {
        "method": "GET"
    })
    .then(treatHTTPResponseACB).then(formatWeatherDataACB);


}

export {getCurrentWeatherInfo};