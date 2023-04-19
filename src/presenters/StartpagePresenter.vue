<script>
import StartView from '../views/StartView.vue';
import SignInView from '../views/SignInView.vue';
import RegisterView from '../views/RegisterView.vue';
import { signIn, createUser } from "../firebaseModel.js";
export default {
    name: "Startpage",
    components: {
        RegisterView,
        SignInView,
        StartView,
    },
    props: ["model", "rerenderKey"],
    data() {
        return { showView: true }
    },
    methods: {
        signInUser(email, password) {
            signIn(email, password);
        },
        viewState() {
            this.showView = !this.showView;
        },

        validatePassword(pw, pw_conf) {
            if (pw.length < 8) {
                alert("Password needs to be at least 8 characters");
                return false;
            }
            else if (pw != pw_conf) {
                alert("Password does not match");
                return false;
            }
            return true;
        },

        registerUser(username, email, password, password_confirm) {
            if (this.validatePassword(password, password_confirm)) {
                createUser(email, password, username);
            }
        },
    }
}
</script>

<template>
    <header><StartView /></header>
    <SignInView v-if="showView" :viewStateChange="viewState" :signInUser="signInUser" />
    <RegisterView v-else :viewStateChange="viewState" :registerUser="registerUser" />
</template>


<style scoped></style>