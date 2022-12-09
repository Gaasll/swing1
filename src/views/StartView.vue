<script>
//import Index from "../components/IndexPresenter.vue";
import NextButton from "../components/NextButton.vue";

export default{
    name: "StartView",
    components: {
    
    NextButton,
  },
    data() { return{
        name: "",
        }
    },
    methods: {
        logName(e){
            console.log(e);
            //@emit target.value
            //something 
            //document.getElementById("nextPage").click();
        }
    }
}
</script>

<template>
     <div class="greeting">
        <h1>Hello</h1>
        <h2>We aim to provide you with the perfect playlist, taylored to your mood and current situation. <br> 
            Answer a couple of questions and we will create a soundtrack to your day.
        </h2>
        <h2>What is your name?</h2>
        <div class="text">
        <input type="text" v-on:keyup.enter="logName" autofocus> 
        </div>
        <p>Hello {{name}}</p>
    </div>
    <NextButton path="/emotion"/>
</template>

<style scoped>
    .text{
        margin: 5em;
    }
    input{
        padding: 10px;
        width: 40%;
        box-shadow: none;

    }
    input[type=text]:focus {
        border: 3px solid rgb(112, 112, 112);
        box-shadow: none;
    }
</style>