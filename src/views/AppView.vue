// in App.vue you only want the components that you want visible on every page

<template>
  <div v-if="error"> {{error}} </div>
  <div>
    <Sidebar v-if="showSidebar" />
    <router-view :model="model" :keys="keys" />
    <Footer />
  </div>
</template>

<script>
import Sidebar from "../components/Sidebar.vue";
import Footer from "../presenters/FooterPresenter.vue";
//import { onErrorCaptured, ref, Suspense } from 'vue'

export default {
  name: "AppView",
  props: ["model", "keys", "showSidebar"],
  components: {
    Sidebar,
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
body {
  margin: 0;
}

#app {
  font-family: 'Didact Gothic';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
  margin-top: 60px;
}

router-view {
  margin-top: 60px;
}

h1, h2, h3 {
  font-weight: normal;
}
</style>
