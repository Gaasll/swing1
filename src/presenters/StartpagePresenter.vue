<script>
import StartView from '../views/StartView.vue';
import SignInView from '../views/SignInView.vue';
import RegisterView from '../views/RegisterView.vue';
// import NextButton from "../components/NextButton.vue";
import {signIn, createUser} from "../firebaseModel.js";

export default { 
    name: "Startpage",
    components: {
        RegisterView,
        SignInView,
        StartView,
        // NextButton,
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
            //console.log(email);
            //console.log(password);
            signIn(email, password);
        },

        viewState(){
            this.showView = !this.showView;
        },
        
        validatePassword(pw, pw_conf){
            if (pw.length < 8) {
                alert("Password needs to be at least 8 characters");
                return false;
            }
            else if (pw != pw_conf){
                alert("Password does not match");
                return false;
            }

            return true;
        },
        
        registerUser(username, email, password, password_confirm) {
            //console.log(username);
            //console.log(email);
            //console.log(password);
            //console.log(password_confirm);

            if(this.validatePassword(password, password_confirm)) {
                createUser(email, password, username);
                //this.model.setUsername(username);
            }
        },
    }
}
</script>

<template>
    <StartView />
    <SignInView v-if="showView" :viewStateChange="viewState" :signInUser="signInUser"/>
    <RegisterView v-else :viewStateChange="viewState" :registerUser="registerUser" />
    <!-- <NextButton path="emotionSetup"/> -->
</template>


<style scoped>

</style>