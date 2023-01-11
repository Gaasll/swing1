<script>
import WeatherView from '../views/WeatherView.vue';
import NextButton from "../components/NextButton.vue";
import {useRoute} from 'vue-router';
import PromiseNoData from "../views/PromiseNoData.vue";

export default { 
    name: "Weather",
    components: {
        WeatherView,
        NextButton,
        PromiseNoData,
    },
    props: ["model", "rerenderKey"],
    methods: {
        showButton(){
            const route = useRoute();
            return (route.path === '/weatherSetup');
        },
        searchMusic(){
            if(this.model.weatherPromiseState.data){
                this.model.searchSongs();
            }
        },
    },
    created(){
        this.searchMusic();
    },
}
</script>

<template>
    <div :key="rerenderKey">
        <div  v-if="this.model.weatherPromiseState.data">
            <WeatherView :weather="model.weatherPromiseState.data.weather"
                         :city="model.weatherPromiseState.data.city"
                         :temperature="model.weatherPromiseState.data.temperature"
                         :iconPath="model.weatherPromiseState.data.icon" 
                         />
            <NextButton v-if="showButton()" path="/playing" />
        </div>
        <div v-else>
            <PromiseNoData :promiseState="this.model.weatherPromiseState"
                           :dependencyPromiseState="this.model.locationPromiseState" />
        </div>
    </div>
</template>


<style scoped>

</style>