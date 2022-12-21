<script>
import StartView from '../views/StartView.vue'
// import { ref } from 'vue'
// import firebase from 'firebase';
//import NextButton from "../components/NextButton.vue";

export default { 
    name: "Startpage",
    components: {
        StartView,
        
    },
    props: ["model", "keys"],
    methods: {
        setName(name) {
            this.model.setUsername(name);
            console.log(this.model.setUsername);
        },
    },
    
}
</script>

<template>
    <StartView :login="login" />
    <!-- <NextButton/> -->
</template>


<style scoped>

</style>