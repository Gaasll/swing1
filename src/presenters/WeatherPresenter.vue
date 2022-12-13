<script>
import WeatherView from "../views/WeatherView.vue"
//import {getCurrentWeatherInfo} from "../weatherSource"
export default {
    name: "WeatherPresenter",
    components: {
        WeatherView,
    },
    
    data() {
        return {
            title: "heyy Emo!",
            counter: 0,
            location: 'Stockholm',
            apiKey: "088f783dc5b617441af73f93fbd5c0bd",
            weather: "",
            displayWeather: false
           
        };
    },

    methods: {
        increment() {
            this.counter++;
        },

        getWeather()
        {
            return this.$http.get('http://api.openweathermap.org/data/2.5/weather?q='+ this.location +'&appid=' + this.apiKey).then((response) => {
                this.weather = response.body;
                this.displayWeather = true
            }, () => {
                this.weather = [];
                this.displayWeather = false
            });
        }
    },

 

};

</script>

<template>
    <WeatherView 
    :title="title" 
    :counter="counter" 
    @counter-increment="increment"
    @get-info=" getCurrentWeatherInfo"
    ></WeatherView>
</template>