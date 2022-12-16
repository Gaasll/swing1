<script>
export default{
  name: "WeatherWidget",
  props: {
    weather: String,
    temperature: Number,
    city: String,
    iconPath: String,
  },
}
</script>

<template>

  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Weather </title>
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="./style.css">
    
  </head>
  <div class="card">
    <!-- <div class="search">
      <input type="text" class="search-bar" placeholder="Search">
      <button><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1.5em"
          width="1.5em" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0 0 11.6 0l43.6-43.5a8.2 8.2 0 0 0 0-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z">
          </path>
        </svg></button>
    </div> -->
    
      <h2 class="city">Weather in {{ city }}</h2>
      <h1 class="temp">{{ temperature }}°C</h1>
      <div class="flex">
        <img :src="iconPath" alt="" class="icon" />
        <div class="description">{{ weather }}</div>
      </div>
      <!--div class="humidity">Humidity: 60%</div>
      <div class="wind">Wind speed: 6.2 km/h</div-->
  </div>
</template>

<style lang="scss" scoped>
body {
     display: flex;/* 
     justify-content: center;
     align-items: center;
     height: 100vh;
     margin: 0;
     font-family: 'Open Sans', sans-serif;
     background: #222;
     background-image: url('https://source.unsplash.com/1600x900/?landscape');
     font-size: 120%;
   */
   }
  
  .card {
    align-items: center;
    justify-content: center;
    background: #000000d0;
    color: white;
    padding: 2em;
    border-radius: 30px;
    margin: auto;
    // margin-left: 25%;
    // margin-right: 25%;
    // width: 100%;
    max-width: 360px;
  }
/*   button {
     margin: 0.5em;
     border-radius: 50%;
     border: none;
     height: 44px;
     width: 44px;
     outline: none;
     background: #7c7c7c2b;
     color: white;
     cursor: pointer;
     transition: 0.2s ease-in-out;
   }

   button:hover {
     background: #7c7c7c6b;
   }

   h1.temp {
     margin: 0;
     margin-bottom: 0.4em;
   }

   .flex {
     display: flex;
     align-items: center;
   }

   .description {
     text-transform: capitalize;
     margin-left: 8px;
   }

   .weather.loading {
     visibility: hidden;
     max-height: 20px;
     position: relative;
   }

   .weather.loading:after {
     visibility: visible;
     content: "Loading...";
     color: white;
     position: absolute;
     top: 0;
     left: 20px;
   }
   */

</style>