import { BASE_URL_WEATHER, API_KEY_WEATHER } from "./apiConfig.js";


const lat = 59.40; 
const lon = 17.95;

function formatWeatherDataACB(responseData){
    let data = {weather: responseData.weather[0].main, country: responseData.name};
    console.log(responseData);
    return data;
    
    console.log(responseData);
    console.log(responseData.weather[0].main);
    console.log(responseData.name);

}


function treatHTTPResponseACB(response){
    if(response.status !== 200){throw new Error("API problem " + response.status); }
    return response.json();
}

function getCurrentWeatherInfo(){
    return fetch(BASE_URL_WEATHER+lat+'&lon='+lon+'&appid='+ API_KEY_WEATHER,{ 
    "method": "GET"
        }
    ).then(treatHTTPResponseACB).then(formatWeatherDataACB);


}

export {getCurrentWeatherInfo};