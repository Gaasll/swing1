<template>
  <div>
    <header>
    <SidebarPresenter v-if="hasSidebar()" :model="model" />
    </header>
    <router-view :model="model" :rerenderKey="rerenderKey" />
    <Footer />
  </div>
</template>

<script>
import SidebarPresenter from "../presenters/SidebarPresenter.vue";
import Footer from "../presenters/FooterPresenter.vue";

export default {
  name: "AppView",
  props: ["model", "rerenderKey", "hasSidebar", ],
  components: {
    SidebarPresenter,
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

header {
  margin: 0;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
}

h1, h2, h3 {
  font-weight: normal;
}
</style>
