<script>
import WeatherWidget from "../components/WeatherWidget.vue";
import NextButton from "../components/NextButton.vue";

export default {
  name: "WeatherView",
  components: {
    WeatherWidget,
    NextButton
  },
  props: ["model", "keys"],
}
</script>

<template>   
    <div class="weather">
      <h1> The weather in your current location, {{name}} </h1>
      <WeatherWidget :model="model" :key="keys['weather']"/>
      <NextButton path="/playing" />
    </div>   
</template>
  
<style scoped>
.weather{
  display: block;
}

</style>