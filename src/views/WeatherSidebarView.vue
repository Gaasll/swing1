<script>
import Sidebar from "../components/Sidebar.vue";
import WeatherWidget from "../components/WeatherWidget.vue";

export default {
  name: "WeatherSidebarView",
  components: {
    WeatherWidget,
    Sidebar,
  }
}
</script>

<template>   
    <div class="weather">
        <Sidebar/>
      <h1> The weather in your current location, {{name}} </h1>
      <WeatherWidget/>
    </div>   
</template>
  
<style scoped>
.weather{
  display: block;
}

</style>