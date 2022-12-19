<script>
<<<<<<< HEAD
// import { onErrorCaptured, ref } from 'vue'
import WeatherView from '../views/WeatherView.vue'
import PromiseNoData from '../views/PromiseNoData.vue'
//import NextButton from "../components/NextButton.vue";
import PromiseNoData from '../views/PromiseNoData.vue'
=======
import WeatherView from '../views/WeatherView.vue';
import Sidebar from "../components/Sidebar.vue";
import NextButton from "../components/NextButton.vue";
import {useRoute} from 'vue-router';
import PromiseNoData from "../views/PromiseNoData.vue";
>>>>>>> 7517b70 (implemented promiseNoData loading view)

export default { 
    name: "Weather",
    components: {
        Sidebar,
        WeatherView,
<<<<<<< HEAD
<<<<<<< HEAD
        //NextButton,
        PromiseNoData,
    },
    props: ["model", "keys", "promiseState"],
=======
        NextButton,
        PromiseNoData,
    },
    props: ["model", "rerenderKey"],
>>>>>>> 7517b70 (implemented promiseNoData loading view)
    methods: {
        showSidebar() {
            const route = useRoute();
            return (route.path === '/weather');
        },
        showButton(){
            const route = useRoute();
            return (route.path === '/weatherSetup');
        },
        searchMusic(){
            if(this.model.weatherPromiseState.data){
                this.model.searchSongs();
            }
<<<<<<< HEAD
=======
        PromiseNoData,
>>>>>>> 934a5a4 (alternative promise results added)
        }
=======
        },
>>>>>>> 7517b70 (implemented promiseNoData loading view)
    },
    created(){
        this.searchMusic();
    },
    // setup(){
    //     const error = ref(null);
    //     onErrorCaptured((e)=>{
    //         error.value = e;
    //         return true;
    //     })
    //     return { error };
    // }
}
</script>

<template>
<<<<<<< HEAD
<<<<<<< HEAD
    <!-- <div v-if="error"> {{error}} 
        <NextButton/> 
    </div> -->
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
=======
    <Sidebar v-if="showSidebar()" />
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
>>>>>>> 7517b70 (implemented promiseNoData loading view)
        </div>
    </div>
=======
    <WeatherView v-if="promiseState.data"/> 
    <PromiseNoData v-else :promiseState="promiseState"/>
>>>>>>> 934a5a4 (alternative promise results added)
</template>


<style scoped>

</style>