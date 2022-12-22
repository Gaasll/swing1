<script>
import StartView from '../views/StartView.vue';
import SignInView from '../views/SignInView.vue';
import RegisterView from '../views/RegisterView.vue';
import NextButton from "../components/NextButton.vue";
import {signIn} from "../firebaseModel.js";

export default { 
    name: "Startpage",
    components: {
        RegisterView,
        SignInView,
        StartView,
        NextButton,
    },
    props: ["model", "rerenderKey"],
    data (){

        return {showView: true}
    },

    methods: {
        login() {
            const email = document.getElementById('email').value;
            const pw = document.getElementById('passwd').value;
            signIn(email, pw);
        },

        signInUser(email, password) {
            console.log(email);
            console.log(password);
            signIn(email, password);
        },

        viewState(){
            this.showView = !this.showView;
        }
    }
}
</script>

<template>
    <StartView />
    <SignInView v-if="showView" :viewStateChange="viewState" :signInUser="signInUser"/>
    <RegisterView v-else :viewStateChange="viewState"/>
    <NextButton path="emotionSetup"/>
</template>


<style scoped>

</style>