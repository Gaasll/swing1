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
      <h1 class="fade-up"> The weather in your current location</h1>
      
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
          <h3 class="temp">{{ temperature }}°C</h3>
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

h1 {
  font-weight: 500;
  font-size: 40px;
  text-align: center;
  opacity: 0;
  animation: fadeUp 1s ease-in-out forwards;
}

.card {
  align-items: center;
  justify-content: center;
  background: #000000b6;
  color: white;
  padding: 2em;
  border-radius: 30px;
  margin: auto;
  max-width: 360px;
   animation: fadeUp 2s ease-in-out forwards;
}

@media (max-width: 512px) {
  .greetings h3 {
    margin-left: 5px;
    margin-right: 5px;
    font-size: 14px;
  }

  h1{
    font-size: 20px;
  }
   h3{
    font-size: 20px;
  }

  .card{
    max-width: 200px;
  }
}

@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>