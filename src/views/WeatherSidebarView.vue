<script setup>
import Sidebar from "../components/Sidebar.vue";
import WeatherView from "../views/WeatherView.vue";
</script>

<template>   
    <div class="weather">
        <Sidebar/>
      <h1> The weather in your current location, {{name}} </h1>
      <WeatherView/>
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
button {
		background: #7c7c7c2b;
		margin: 0.5em;
		border-radius: 50%;
		border: none;
		height: 44px;
		width: 44px;
		outline: none;
		color: white;
		cursor: pointer;
		transition: 0.2s ease-in-out;
	}
</style>