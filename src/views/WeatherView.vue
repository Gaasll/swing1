<script>
import WeatherWidget from "../components/WeatherWidget.vue";
import Sidebar from "../components/Sidebar.vue"
import NextButton from "../components/NextButton.vue"
import {useRoute} from 'vue-router';

export default {
  name: "WeatherView",
  components: {
    WeatherWidget,
    NextButton,
    Sidebar,
  },
  props: {
    username: String,
    weather: String,
    temperature: Number,
    city: String,
    iconPath: String,
    // searchMusic: Function,
  },
  methods: {
    showSidebar() {
      const route = useRoute();
      // console.log(route.path);
      return (route.path === '/weather2');
    },
    showButton(){
      const route = useRoute();
      // console.log(route.path);
      return (route.path === '/weather1');
    },
    // searchMusic(){
    //     this.model.searchSongs();
    // }
  },
  // created(){
  //     this.searchMusic();
  // }
}
</script>

<template>   
    <div class="weather">
      <Sidebar v-if="showSidebar()" />
      <h1> The weather in your current location, {{ username }} </h1>
      <WeatherWidget :weather="weather"
                     :city="city"
                     :temperature="temperature"
                     :iconPath="iconPath" />
      <NextButton v-if="showButton()" path="/playing" />
    </div>   
</template>
  
<style scoped>
.weather{
  display: block;
}

</style>