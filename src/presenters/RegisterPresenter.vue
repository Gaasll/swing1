<script>
import RegisterView from "../views/RegisterView.vue"
//import {ref} from 'vue';
//import NextButton from "../components/NextButton.vue"
//import Sidebar from "../components/Sidebar.vue"
//import {useRoute} from 'vue-router';
//import {createUser} from "../firebaseModel.js";

export default {
    name: "Register",
    components: {
        //Sidebar,
        RegisterView,
        //NextButton,
    },
    props: ["model", "rerenderKey"],
    methods: {
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
        registerUser(email, password, password_confirm) {
            console.log(email);
            console.log(password);
            console.log(password_confirm);

            if(this.validatePassword(password, password_confirm)) {
                //this.model.setUsername(name);
                //console.log(this.model.setUsername);
                console.log([email, password]);
                //createUser(email, password);
            }
        },
    },
};
</script>

<template>
    <!--Sidebar v-if="showSidebar()" /-->
    <RegisterView :registerUser="registerUser" />
    <!--NextButton path="" event="" /-->
</template>