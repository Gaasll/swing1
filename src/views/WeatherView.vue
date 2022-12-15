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
    weather: String,
    temperature: Number,
    city: String,
    iconPath: String,
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
    }
  }
>>>>>>> c73262a (SoundCloud working! (kinda))
}
</script>

<template>   
    <div class="weather">
      <h1> The weather in your current location, {{name}} </h1>
<<<<<<< HEAD
      <WeatherWidget :model="model" :key="keys['weather']"/>
      <NextButton path="/playing" />
=======
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