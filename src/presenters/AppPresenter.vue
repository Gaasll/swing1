<template>
  <div>
    <AppView :model="model" :keys="keys" :showSidebar="showSidebar()" />
  </div>
</template>

<script>
import AppView from '../views/AppView.vue'
import SwingModel from '../SwingModel.js'
import { onErrorCaptured, ref, Suspense } from 'vue'

export default {
  name: 'App',
  components: {
    AppView,
    Suspense,
  },
  data() {
    return{
      model: new SwingModel(this.rerender.bind(this)),
      keys: {weather: 0,},
    }
  },
  methods: {
    rerender(){
      this.keys.weather += 1;
    },
    showSidebar(){
      return window.location.hash == 'sidebar';
    },
  }
}
</script>