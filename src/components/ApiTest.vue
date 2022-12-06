<script>
import WeatherModel from "../weatherModel";
let params = new WeatherModel();
const weatherData = params.setWeatherData();
//console.log(weather);

export default{
    data() {
        return {
            weather: weatherData.weather 
                    
        }
    }
}


</script>

<template>
    <div>
        Hello, dear devs <span>{{ weather }}</span>
    </div>
</template>