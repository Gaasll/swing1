// in App.vue you only want the components that you want visible on every page

<template>
  <div>
    <router-view :model="model" :rerenderKey="rerenderKey" />
    <Footer />
  </div>
</template>

<script>
import Footer from "../presenters/FooterPresenter.vue";

export default {
  name: "AppView",
  props: ["model", "rerenderKey"],
  components: {
    Footer,
  },
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

header{
    margin: 50px;
    margin-left: 15%;
    margin-right: 15%;
}

h1, h2, h3 {
  font-weight: normal;
}
</style>
