<script>
//import TheWelcome from "../components/TheWelcome.vue";
</script>

<template>   
    <div class="weather">
        <h1> 
        Let's talk weather 
    </h1>
</div>
      
      <div class="card">
      
      <div class="search">
        <input type="text" class="search-bar" placeholder="Search">
        <button><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1.5em"
            width="1.5em" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0 0 11.6 0l43.6-43.5a8.2 8.2 0 0 0 0-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z">
            </path>
          </svg></button>
      </div>
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
    .weather {
      min-height: 100vh;
      min-width: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
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
.search {
  display: flex;
  align-items: center;
  justify-content: center;
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
input.search-bar {
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
  
</style>