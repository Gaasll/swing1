<template>  
  <div class="wrapper">
    <!--Sidebar v-if="showSidebar()"/-->
      <header>
        <h1 class="question"> How are you feeling today?</h1>
      </header>
      <div class="check-form">
        <div class="emotion" v-for="emotion in emotions" :key="emotion.emotion">
          <!-- <input type="checkbox" id="emo"> {{emotion}} -->
          <input type="checkbox" class="checkbox" :id="emotion.emotion" :onChange="onCheckboxChange" v-if="emotion.checked" checked>
          <input type="checkbox" class="checkbox" :id="emotion.emotion" :onChange="onCheckboxChange" :disabled="isFull" v-else>
          <label :for="emotion.emotion"> {{ emotion.emotion }} </label>
        </div>
      </div>
      <NextButton v-if="showButton()" path="weather1"/>
  </div>
</template>

<script >
//using the components checkbox and NextButton under component section below. 
// import Checkbox from "../components/Checkbox.vue"
//import Sidebar from "../components/Sidebar.vue"
import NextButton from "../components/NextButton.vue"
import {useRoute} from 'vue-router';

export default {
  name: "EmotionView",
  components: {
    //Sidebar,
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
        margin: 50px;
    }

    .check-form{
      width: 75%;
      margin: auto;
      margin-left: 22.2%;
      display: grid;
      grid-template-columns: auto auto auto;
    }

    .emotion{
      font-size: larger;
      text-align:left;
      margin: 18px;
    }

    .checkbox{
        background-color: lightgrey;
    }

  @media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
@media (max-width: 490px){
  .check-form{
    grid-template-columns: auto;
  }
}
</style>