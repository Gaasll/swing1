<template>
     <div class="greeting">
        <h1>Hello</h1>
        <h2>We aim to provide you with the perfect playlist, taylored to your mood and current situation. <br> 
            Answer a couple of questions and we will create a soundtrack to your day.
        </h2>
        <form @submit.prevent="Login"> Sign in
            <input type="email" placeholder="email" v-model="email">
            <input type="password" placeholder="password" v-model="password">
            <input type="submit" value="login">
        <p>Register here <router-link to="/register"></router-link></p>
        </form>
        <!-- <h2>What is your name?</h2>
        <input type="text" v-on:keyup.enter="logName" autofocus>  -->
    </div>
    <NextButton path="emotion1" @click="signIn" />
</template>

<script>
import NextButton from "../components/NextButton.vue";
import { ref } from 'vue'
import firebase from 'firebase';

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
    },
    setup(){
        const email = ref("");
        const password = ref("");
        
        // const register = () => {}

        const login = () => {
            firebase.auth().signInWithEmailAndPassword(email.value, password.value)
            .then(data => console.log(data)).catch(error => alert(error.message))
        }
        return { email, password, login };
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