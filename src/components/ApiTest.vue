<script>
import WeatherModel from "../weatherModel";
let params = new WeatherModel();
const weatherData = params.setWeatherData();
//console.log(weather);

export default{
    props: {weather: weatherData.weather}
}


</script>

<template>
    <div>
        Hello, dear devs!{{weather}}
    </div>
</template>