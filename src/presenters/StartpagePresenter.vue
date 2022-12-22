<script>
import StartView from '../views/StartView.vue';
import NextButton from "../components/NextButton.vue";
import {signIn} from "../firebaseModel.js";

export default { 
    name: "Startpage",
    components: {
        StartView,
        NextButton,
    },
    props: ["model", "rerenderKey"],
    methods: {
        login() {
            const email = document.getElementById('email').value;
            const pw = document.getElementById('passwd').value;
            signIn(email, pw);
        },
    }
}
</script>

<template>
    <StartView />
    <NextButton path="emotionSetup"/>
</template>


<style scoped>

</style>