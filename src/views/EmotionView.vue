<template>  
  <div class="wrapper">
        <header>
          <div class="question"> How are you feeling today?</div>
        </header>
<<<<<<< HEAD
          <!-- <form @submit="handleSubmit"> -->
            <div class="columns" v-for="emotion in emotions" :key="emotion">
              <input type="checkbox" name="acs" :value="emotion" id="emo"> {{emotion}}
            </div>
            <input class="button" type="button" @click="printEmotions" value="Your emotions" />
        

        <div>
          <input class="output" type="text" id="order" size="50"> 
        </div>
          <!-- </form> -->
=======
          <!--form @submit="handleSubmit"-->
            <div class="columns" v-for="emotion in emotions" :key="emotion.emotion">
              <input type="checkbox" id="emo" :onChange="onCheckboxChange" v-if=emotion.checked checked>
              <input type="checkbox" id="emo" :onChange="onCheckboxChange" v-else> {{emotion.emotion}}
            </div>
          <!--/form-->
>>>>>>> 810b16e (emotions handled by model plus half way to working weather widget)
        <NextButton path="weather" />
        <!-- <p>selected feelings: </p>
        <p v-for="emotion in emotions" :key="emotion" >{{emotion}}</p> -->
    </div>
</template>

<script>
//using the components checkbox and NextButton under component section below. 
// import Checkbox from "../components/Checkbox.vue"
import NextButton from "../components/NextButton.vue"

export default {
  name: "EmotionView",
  components: {
    NextButton,
  },
  data() { 
        return {
        }
    },
  props: {
    emotions: Array,
    onEmotionChange: Function,
  },

  created() {
console.log(this.emotions);
  },

  methods: {
    counterIncrement() {
      this.$emit("counter-increment");
    },
<<<<<<< HEAD
    handleSubmit(){

    },

    printEmotions() {
      this.$emit("print-emo");
      },
=======
    onCheckboxChange(e){
      console.log(e);
      this.onEmotionChange(e);
    },
>>>>>>> 810b16e (emotions handled by model plus half way to working weather widget)
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
    .columns{
        text-align:left;
        column-count: 3;
        column-width: 100px;
        column-gap: 0em;
        margin: 20px;
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
    
    /* button{ 
        align-self: center;
        cursor: pointer;
        border-radius: 20px;
        background-color: black;
        border: none;
        color: white;
        padding: 10px 50px;
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
        } */

.output {
  border: none;
background-color: transparent;
resize: none;
outline: none;
font-family: 'Didact Gothic';
}

</style>