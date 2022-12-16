// in App.vue you only want the components that you want visible on every page

<template>
  <div>
    <!-- <Sidebar v-if="" /> -->
    <router-view :model="model" :keys="keys" />
    <Footer />
  </div>
</template>

<script>
import Footer from "../presenters/FooterPresenter.vue";

export default {
  name: "AppView",
  props: ["model", "keys"],
  components: {
    Footer,
  },
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
</style>
