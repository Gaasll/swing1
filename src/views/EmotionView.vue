<template>  
  <div class="wrapper">
    <Sidebar v-if="showSidebar()"/>
      <header>
        <div class="question"> How are you feeling today?</div>
      </header>
      <div class="check-form">
        <div class="columns" v-for="emotion in emotions" :key="emotion.emotion">
          <!-- <input type="checkbox" id="emo"> {{emotion}} -->
          <input type="checkbox" :id="emotion.emotion" :onChange="onCheckboxChange" v-if="emotion.checked" checked>
          <input type="checkbox" :id="emotion.emotion" :onChange="onCheckboxChange" :disabled="isFull" v-else>
          <label :for="emotion.emotion"> {{ emotion.emotion }} </label>
        </div>
      </div>
      <NextButton v-if="showButton()" path="weather1"/>
  </div>
</template>

<script >
//using the components checkbox and NextButton under component section below. 
// import Checkbox from "../components/Checkbox.vue"
import Sidebar from "../components/Sidebar.vue"
import NextButton from "../components/NextButton.vue"
import {useRoute} from 'vue-router';

export default {
  name: "EmotionView",
  components: {
    Sidebar,
    NextButton,
  },
  props: {
    emotions: Array,
    onEmotionChange: Function,
    isFull: Boolean,
  },
  methods: {
    counterIncrement() {
      this.$emit("counter-increment");
    },
    onCheckboxChange(e){
      // console.log(e);
      this.onEmotionChange(e);
    },
    showSidebar() {
      const route = useRoute();
      // console.log(route.path);
      return (route.path === '/emotion2');
    },
    showButton(){
      const route = useRoute();
      // console.log(route.path);
      return (route.path === '/emotion1');
    }
  },
};
</script>

<style scoped>
    header{
        text-align: center;
        margin: 50px;
        font-family: 'Didact Gothic'; 
    }
    .question{
      text-align:center;
      font-size: xx-large;
      font-family: 'Didact Gothic';
    }
    span{ margin-top: 0;}

    span > input{
        background-color: lightgrey;
    }

    .check-form{
      width: 80%;
      margin: auto;
      display: grid;
      grid-template-columns: auto auto auto;
    }
    .columns{
        text-align:left;
        column-count: 3;
        column-width: 100px;
        column-gap: 0em;
        margin: 20px;
        font-family: 'Didact Gothic';
        /* shorthand: columns: 250px 3; */
    }

    button {
		background: #0606062b;
		margin: 0.5em;
		border-radius: 50%;
		border: none;
		height: 44px;
		width: 44px;
		outline: none;
		color: rgb(60, 59, 59);
		cursor: pointer;
		transition: 0.2s ease-in-out;
	}

  @media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
    font-family: 'Didact Gothic';
  }
}
@media (max-width: 490px){
  .check-form{
    grid-template-columns: auto;
  }
}
</style>