<template>
     <header>
        <h1>Hello</h1>
        <h2>We aim to provide you with the perfect playlist, tailored to your mood and current situation. <br> 
            Answer a couple of questions and we will create a soundtrack to your day.
        </h2>
<<<<<<< HEAD
<<<<<<< HEAD
        <!-- <h2>What is your name?</h2>
        <input type="text" v-on:keyup.enter="logName" autofocus>  -->
    </div>
<<<<<<< HEAD
    <NextButton v-on:click="logName" path="emotion" />
=======
    <NextButton path="emotion1" />
    <!--NextButton v-on:click="logName" path="emotion1" /-->
>>>>>>> c56d858 (minor fixes)
</template>

<script>
import NextButton from "../components/NextButton.vue";

export default{
    name: "StartView",
    props: {
        onNameInput: Function 
    },
    components: {
        NextButton
    },
    data() {
        return{
        
        }
    },
    methods: {
        logName(e){
            this.onNameInput(e.target.username);
            // console.log(e);
            // this.$emit('setUsername', this.username); // target.value
            // // this.username = KeyboardEvent.target.value;
            // document.getElementById("nextPage").click();
        }
    }
}
=======
    </div>
=======
    </header>
>>>>>>> 7517b70 (implemented promiseNoData loading view)
</template>

<script>
>>>>>>> 2be8521 (started cleanup)
</script>

<style scoped>
    .text{
        margin: 5em;
    }
</style>