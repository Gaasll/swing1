<script>
import RegisterView from "../views/RegisterView.vue"
import {createUser} from "../firebaseModel.js";

export default {
    name: "Register",
    components: {
        RegisterView,
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
                createUser(email, password);
            }
        },
    },
};
</script>

<template>
    <RegisterView :registerUser="registerUser" />
</template>