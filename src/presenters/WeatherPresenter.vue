<script>
// import { onErrorCaptured, ref } from 'vue'
import WeatherView from '../views/WeatherView.vue'
//import NextButton from "../components/NextButton.vue";
import PromiseNoData from '../views/PromiseNoData.vue'

export default { 
    name: "Weather",
    components: {
        WeatherView,
        //NextButton,
        PromiseNoData,
    },
    props: ["model", "keys", "promiseState"],
    methods: {
        searchMusic(){
            if(this.model.weatherPromiseState.data){
                this.model.searchSongs();
            }
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
                    :username="model.username"
                    :weather="model.weatherPromiseState.data.weather"
                    :city="model.weatherPromiseState.data.city"
                    :temperature="model.weatherPromiseState.data.temperature"
                    :iconPath="model.weatherPromiseState.data.icon" 
                    :key="keys.weather" />
        <div v-else>
            <PromiseNoData :promiseState="this.model.weatherPromiseState" />
            <NextButton/> 
        </div>
    </div>
</template>


<style scoped>

</style>