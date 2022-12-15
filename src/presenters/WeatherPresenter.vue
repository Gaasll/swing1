<script>
import WeatherView from '../views/WeatherView.vue'
//import NextButton from "../components/NextButton.vue";

export default { 
    name: "Weather",
    components: {
        WeatherView,
    },
    props: ["model", "keys"],
    methods: {
        searchMusic(){
            this.model.searchSongs();
        }
    },
    created(){
        this.searchMusic();
    },
}
</script>

<template>
    <div :key="keys.weather">
        <WeatherView v-if="this.model.weatherPromiseState.data"
                     :weather="model.weatherPromiseState.data.weather"
                     :city="model.weatherPromiseState.data.city"
                     :temperature="model.weatherPromiseState.data.temperature"
                     :iconPath="model.weatherPromiseState.data.icon" 
                     :key="keys.weather" />
        <div v-else>
            loading...
        </div>
    </div>
</template>


<style scoped>

</style>