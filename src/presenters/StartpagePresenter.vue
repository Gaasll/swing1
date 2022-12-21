<script>
import StartView from '../views/StartView.vue';
import NextButton from "../components/NextButton.vue";
import {createUser} from "../firebaseModel.js";

export default { 
    name: "Startpage",
    components: {
        StartView,
        NextButton,
    },
    props: ["model", "rerenderKey"],
    methods: {
        setName() {
            const email = document.getElementById('email').value;
            const pw = document.getElementById('passwd').value;
            //this.model.setUsername(name);
            //console.log(this.model.setUsername);
            console.log([email, pw]);
            createUser(email, pw);
        },
    }
}
</script>

<template>
    <StartView />
    <NextButton path="emotionSetup" :event="setName"/>
</template>


<style scoped>

</style>