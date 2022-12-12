
<template>
  
  <div class="wrapper">
        <header>
        <div class=" question"> How are you feeling today?

        </div>
        <p>{{title}}</p>
        <p>{{counter}}</p>
        <button @click="counterIncrement">+</button>
        </header>
        
            <div>
            <input  type="checkbox" name="acs" value="Happy" /> Happy
            <input  type="checkbox" name="acs" value="Sad" /> Sad
            <input  type="checkbox" name="acs" value="Stressed" />Stressed
            </div>
            <div>
            <input  type="checkbox" name="acs" value="Scared" />Scared
            <input type="checkbox" name="acs" value="Embarassed" />Embarassed
            <input type="checkbox" name="acs" value="Confident" />Confident
            </div>
            <div>
            <input type="checkbox" name="acs" value="Horny" />Horny
            <input type="checkbox" name="acs" value="Cozy" />Cozy
            <input type="checkbox" name="acs" value="Queer"  />Queer
          </div>
          <div>
            <input type="checkbox" name="acs" value="Angry" />Angry
            <input type="checkbox" name="acs" value="Lonely" />Lonely
            <input type="checkbox" name="acs" value="Hungry" />Hungry
          </div>
            <input type="checkbox" name="acs" value="Silly" />Silly
            <input type="checkbox" name="acs" value="Flirty" />Flirty
            <input type="checkbox" name="acs" value="Melancholic" />Melancholic
     
   
        <p>
            <input type="button" @click="printChecked" value="Print Selected Items" />
        </p>
        <NextButton path="weather" />
    </div>
</template>


<script  >
//using the components checkbox and NextButton under component section below. 
//import Checkbox from "../components/Checkbox.vue"
import NextButton from "../components/NextButton.vue"

export default {
  name: "EmotiionView",
  components: {
   
    NextButton,
  },
  props: {
    title: String,
    counter: Number,
  },
  methods: {
    counterIncrement() {
      this.$emit("counter-increment");
    },

  

     printChecked() {
      this.$emit("choose-emo");
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


        .container {
        display: block;
        position: relative;
        padding-left: 35px;
        margin-bottom: 12px;
        cursor: pointer;
        font-size: 22px;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        visibility: inherit;
    }
    /* Hide the browser's default checkbox */
    .container input {
        position: absolute;
        opacity: 0;
        cursor: pointer;
        height: 0;
        width: 0;
    }
    /* Create a custom checkbox */
    .checkmark {
        position: absolute;
        top: 0;
        left: 0;
        height: 25px;
        width: 25px;
        background-color: #eee;
    }
    /* On mouse-over, add a grey background color */
    /* .container:hover input ~ .checkmark {
        background-color: #ccc;
    } */
    /* When the checkbox is checked, add a blue background */
    .container input:checked ~ .checkmark {
        background-color: #ddd;
    }
    /* Create the checkmark/indicator (hidden when not checked) */
    .checkmark:after {
        content: "";
        position: absolute;
        display: none;
    }

    /* Show the checkmark when checked */
    .container input:checked ~ .checkmark:after {
        display: block;
    }
    /* Style the checkmark/indicator */
    .container .checkmark:after {
        left: 9px;
        top: 5px;
        width: 5px;
        height: 10px;
        border: solid white;
        border-width: 0 3px 3px 0;
        -webkit-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        transform: rotate(45deg);
    }

</style>



