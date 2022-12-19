<script>
export default {
  name: "WeatherView",
  props: {
    weather: String,
    temperature: Number,
    city: String,
    iconPath: String,
    // searchMusic: Function,
  },
}
</script>

<template>   
    <div class="weather">
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