<template>
  <div>
    <AppView :model="model" :rerenderKey="rerenderKey" />
  </div>
</template>

<script>
import AppView from '../views/AppView.vue'
import SwingModel from '../SwingModel.js'

export default {
  name: 'App',
  components: {
    AppView,
  },
  data() {
    return{
      model: new SwingModel(this.rerender.bind(this)),
      rerenderKey: 0,
    }
  },
  methods: {
    rerender(){
      this.rerenderKey += 1;
    },
  }
}
</script>