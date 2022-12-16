<template>
     <div class="greeting">
        <h1>Hello</h1>
        <h2>We aim to provide you with the perfect playlist, taylored to your mood and current situation. <br> 
            Answer a couple of questions and we will create a soundtrack to your day.
        </h2>
        <!-- <div class="text">
        <input type="text" v-on:keyup.enter="logName" autofocus> 
        </div> -->
        <!-- <p>Hello {{username}}</p> -->
    </div>
    <NextButton v-on:click="logName" path="emotion1" />
</template>

<script>
import NextButton from "../components/NextButton.vue";

export default{
    name: "StartView",
    props: { },
    components: {
        NextButton
    },
    data() {
        return{
        
        }
    },
    methods: {
        logName(e){
            console.log(e);
            this.$emit('setUsername', this.username); // target.value
            // this.username = KeyboardEvent.target.value;
            document.getElementById("nextPage").click();
        }
    }
}
</script>

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