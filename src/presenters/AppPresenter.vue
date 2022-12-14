<template>
  <div>
    <AppView :model="model" />
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
      model: new SwingModel()
    }
  },
  methods: {
    
  },
}
</script>