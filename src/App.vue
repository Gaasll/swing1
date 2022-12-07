// in App.vue you only want the components that you want visible on every page

<template>
  <div>
    <router-view />
    <Footer/>
  </div>
</template>

<script>
import Footer from "./presenters/Footer.vue"
export default {
  name: 'App',
  components: {
    Footer,
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
  margin-top: 60px;
}
Footer{
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 2.5rem; 
}
</style>