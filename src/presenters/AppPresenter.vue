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
<<<<<<< HEAD
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
</style>
=======
</script>
>>>>>>> d56bd0f6fd7f2945ccfb03dd9b7de052c06d6f29
