<script>
<<<<<<< HEAD
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
=======
export default {
  name: "WeatherView",
>>>>>>> 7517b70 (implemented promiseNoData loading view)
  props: {
    weather: String,
    temperature: Number,
    city: String,
    iconPath: String,
    // searchMusic: Function,
  },
<<<<<<< HEAD
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
=======
>>>>>>> 7517b70 (implemented promiseNoData loading view)
}
</script>

<template>   
    <div class="weather">
<<<<<<< HEAD
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
=======
      <h1> The weather in your current location</h1>
      
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Weather </title>
        <link rel="preconnect" href="https://fonts.gstatic.com">
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="./style.css">
      </head>
      <div class="card">
          <h2 class="city">Weather in {{ city }}</h2>
          <h1 class="temp">{{ temperature }}°C</h1>
          <div class="flex">
            <img :src="iconPath" alt="" class="icon" />
            <div class="description">{{ weather }}</div>
          </div>
      </div>
>>>>>>> 7517b70 (implemented promiseNoData loading view)
    </div>   
</template>
  
<style scoped>
.weather{
  display: block;
}

.card {
  align-items: center;
  justify-content: center;
  background: #000000d0;
  color: white;
  padding: 2em;
  border-radius: 30px;
  margin: auto;
  max-width: 360px;
}
</style>