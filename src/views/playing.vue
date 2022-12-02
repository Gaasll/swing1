<script setup lang="ts">
import TheWelcome from "../components/TheWelcome.vue";
</script>



<template>
    <div class="playing">
    <h1 >Playing now</h1>
    
   
  </div>


      <div class="card">
      
      
    <div class="box box1"><img src="song.jpg" alt="a balloon"></div>
      <br>
        <div  class="box desc" > Say What You Say</div>
        <div  class="box desc" > issa-e</div>

        <button> <span class="material-icons">favorite </span>
          </button>

        

  
     
    
    </div>
  
    <div class="scrolling">
		<h2>PLAYING MUSIC FOR BEING HAPPY. THE WEATHER IS SUNNY.</h2>
	</div>
    
  </template>
  
  
  <style>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  font-family: 'Didact Gothic';
  top: -10px;
}
h3 {
  font-size: 1.2rem;
  font-family: 'Didact Gothic';
}
  @media (min-width: 600px) {
    .playing {
        min-height: 15vh;
      min-width: 100vh;
      display: flex;
      align-items: center;
     
    
    }
  } 
.card {
  background: #000000d0;
  color: white;
  padding: 2em;
  border-radius: 30px;
  width: 100%;
  max-width: 420px;
  margin: 1em;
}
.box {
  display: flex;
  align-items: center;
  justify-content: center;
}
.box img {
    width: 100%;
    height: 100%;
}
.box1 img {
    object-fit: cover;
}
button {
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
.box desc {
  border: none;
  outline: none;
  padding: 0.4em 1em;
  border-radius: 24px;
  background: #7c7c7c2b;
  color: white;
  font-family: inherit;
  font-size: 105%;
  width: calc(100% - 100px);
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
.scrolling {
	position: relative;
	width: 100%;
	height: 50px;
	overflow: hidden;
	margin-top: 50px;
}
.scrolling h2 {
	position: absolute;
	width: 100%;
	height: 100%;
	margin: 0;
	padding: 0;
	font-size: 4em;
	text-align: center;
	line-height: 50px;
	color: #fff;
	transform: translateX(100%);
	animation: scrolling 15s linear infinite;
}
@keyframes scrolling {
	0% {
		transform: translateX(100%);
	}
	100% {
		transform: translateX(-100%);
	}
}
  
  
  </style>