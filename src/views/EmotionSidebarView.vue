<template>  
  <div class="wrapper">
    <Sidebar/>
        
        <div class=" question"> How are you feeling today?
        </div>
        
        <div class="columns">
            <Checkbox text="Happy" />
            <Checkbox text="Sad" />
            <Checkbox text="Stressed" />
            <Checkbox text="Scared" />
            <Checkbox text="Embarassed" />
            <Checkbox text="Confident" />
            <Checkbox text="Horny" />
            <Checkbox text="Cozy" />
            <Checkbox text="Queer" />
            <Checkbox text="Angry" />
            <Checkbox text="Lonely" />
            <Checkbox text="Hungry" />
            <Checkbox text="Silly" />
            <Checkbox text="Flirty" />
            <Checkbox text="Melancholic" />
        </div>
    </div>
</template>


<script >
//using the components checkbox and NextButton under component section below. 
import Checkbox from "../components/Checkbox.vue"
import Sidebar from "../components/Sidebar.vue"

export default {
  name: "EmotionSidebarView",
  components: {
    Checkbox,
    Sidebar,
  },
  props: {
    title: String,
    counter: Number,
  },
  methods: {
    counterIncrement() {
      this.$emit("counter-increment");
    },

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
</style>