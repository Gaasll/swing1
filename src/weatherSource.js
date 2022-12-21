import { BASE_URL_WEATHER, API_KEY_WEATHER } from "./apiConfig.js";

function formatWeatherDataACB(responseData){
    let data = {weather:     responseData.weather[0].main,
                city:        responseData.name,
                icon:        "https://openweathermap.org/img/wn/" + responseData.weather[0].icon + ".png",
                temperature: responseData.main.temp,
            };
    //console.log(responseData);
    return data;
}


function treatHTTPResponseACB(response){
    if(response.status !== 200){throw new Error("API problem " + response.status); }
    return response.json();
}

function getCurrentWeatherInfo(location){
    let searchParams = new URLSearchParams({
        lat: location.lat,
        lon: location.lon,
        appid: API_KEY_WEATHER,
        units: "metric",
    })
    return fetch(BASE_URL_WEATHER + searchParams, {
        "method": "GET"
    })
    .then(treatHTTPResponseACB).then(formatWeatherDataACB);
}

export {getCurrentWeatherInfo};