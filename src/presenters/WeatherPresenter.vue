<script>
import WeatherView from "../views/WeatherView.vue"
import {getCurrentWeatherInfo} from "../weatherSource"
export default {
    name: "WeatherPresenter",
    components: {
        WeatherView,
    },
    
    data() {
        return {
            title: "heyy Emo!",
            counter: 0,
            name: "",
        };
    },

    methods: {
        increment() {
            this.counter++;
        },

        getInfo(){
            getCurrentWeatherInfo();
        },
    },
};

</script>

<template>
    <WeatherView 
    :title="title" 
    :counter="counter" 
    @counter-increment="increment"
    @get-info="getInfo"
    ></WeatherView>
</template>