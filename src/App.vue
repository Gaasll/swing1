// in App.vue you only want the components that you want visible on every page

<template>
  <div>
    <router-view />
   
  </div>
</template>

<script>
//import Footer from "./components/Footer.vue"
export default {
  name: 'App',
  components: {
    
  }
}
</script>

<style>
#app {
  font-family: Didact Gothic;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;

}
button {
  background-image: url('./assets/button.jpg');
		margin: 0.5em;
		border-radius: 50%;
		border: none;
		height: 44px;
		width: 44px;
		outline: none;
		color: rgb(248, 246, 246);
		cursor: pointer;
		transition: 0.2s ease-in-out;
	}

</style>
