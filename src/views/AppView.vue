// in App.vue you only want the components that you want visible on every page

<template>
  <div v-if="error"> {{error}} </div>
  <div>
<<<<<<< HEAD
    <router-view :model="model" :keys="keys" />
=======
    <!-- <Suspense>
      <template #default> -->
        <router-view :model="model" :keys="keys" />
      <!-- </template>
      <template #fallback>
        <div>Loading weather...</div>
        <img src="https://img.pikbest.com/png-images/20190918/cartoon-snail-loading-loading-gif-animation_2734139.png!c1024wm0" class="loadingImage" />
      </template>
    </Suspense> -->
>>>>>>> 1869d29 (no data promise)
    <Footer />
  </div>
</template>

<script>
import Footer from "../presenters/FooterPresenter.vue";
//import { onErrorCaptured, ref, Suspense } from 'vue'

export default {
  name: "AppView",
  props: ["model", "keys"],
  components: {
    Footer,
    // Suspense,
  },
  // setup(){
  //       const error = ref(null);
  //       onErrorCaptured((e)=>{
  //           error.value = e;
  //           return true;
  //       })
  //       return { error };
  //   }
}
</script>

<style>
#app {
  font-family: 'Didact Gothic';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
  margin-top: 60px;
}
<<<<<<< HEAD
<<<<<<< HEAD
button {
  background-image: url('../assets/button.jpg');
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
Footer{
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 2.5rem; 
}
=======
>>>>>>> 4910dfb (fixed inconsistent button behavior)
=======

h1, h2, h3 {
  font-weight: normal;
}
>>>>>>> 60f0223 (tar helg nu)
</style>
