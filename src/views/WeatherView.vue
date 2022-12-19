<script>
import WeatherWidget from "../components/WeatherWidget.vue";
import NextButton from "../components/NextButton.vue";

export default {
  name: "WeatherView",
  components: {
    WeatherWidget,
    NextButton
  },
<<<<<<< HEAD
  props: ["model", "keys"],
=======
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
<<<<<<< HEAD
    }
  }
>>>>>>> c73262a (SoundCloud working! (kinda))
=======
    },
    // searchMusic(){
    //     this.model.searchSongs();
    // }
  },
  // created(){
  //     this.searchMusic();
  // }
>>>>>>> 1869d29 (no data promise)
}
</script>

<template>   
    <div class="weather">
<<<<<<< HEAD
      <h1> The weather in your current location, {{name}} </h1>
<<<<<<< HEAD
      <WeatherWidget :model="model" :key="keys['weather']"/>
      <NextButton path="/playing" />
=======
=======
      <Sidebar v-if="showSidebar()" />
      <h1> The weather in your current location, {{ username }} </h1>
>>>>>>> 4742420 (fixes to model and checkboxes plus small cleanups)
      <WeatherWidget :weather="weather"
                     :city="city"
                     :temperature="temperature"
                     :iconPath="iconPath" />
      <NextButton v-if="showButton()" path="/playing" />
>>>>>>> c73262a (SoundCloud working! (kinda))
    </div>   
</template>
  
<style scoped>
.weather{
  display: block;
}

</style>