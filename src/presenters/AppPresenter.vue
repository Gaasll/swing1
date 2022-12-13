<template>
  <div>
    <AppView :model="musicModel" />
  </div>
</template>

<script>
import AppView from '../views/AppView.vue'
import MusicModel from '../MusicModel.js'

export default {
  name: 'App',
  components: {
    AppView,
  },
  data() {
    return{
      musicModel: new MusicModel()
    }
  },
  methods: {
    
  },
}
</script>