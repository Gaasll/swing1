<script setup>
import WeatherWidget from "../components/WeatherWidget.vue";
import NextButton from "../components/NextButton.vue";
</script>

<template>   
    <div class="weather">
      <h1> The weather in your current location, {{name}} </h1>
      <WeatherWidget/>
      <NextButton path="/playing" />
      <!-- <router-link to="/playing" class="button">
        <button>
            <span class="material-icons">chevron_right</span>
        </button>
      </router-link> -->
    </div>   
</template>
  
<style scoped>
.weather{
  display: block;
}

</style>