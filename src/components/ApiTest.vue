<script>
import WeatherModel from "../weatherModel";
let params = new WeatherModel();
const weatherData = params.setWeatherData();
//console.log(weatherData);

export default{
    data() {
        return {
            
            weather:'' //weatherData.weather
                    
        }
    },
    methods: {
         getWeatherACB(){
            this.weather = weatherData;
            console.log(this.weather);
        }

    }
    }

    

</script>

<template>
    <div>
        Hello, dear devs! {{weather}}
        <button @click="getWeatherACB">hehe lille du</button>
    </div>
</template>