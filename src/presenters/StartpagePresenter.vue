<script>
import StartView from '../views/StartView.vue'
import NextButton from "../components/NextButton.vue";

export default { 
    name: "Startpage",
    components: {
        StartView,
        NextButton
        
    },
    props: ["model", "keys"],
    methods: {
        setName(name) {
            this.model.setUsername(name);
            console.log(this.model.setUsername);
        },
    }
}
</script>

<template>
<<<<<<< HEAD
    <StartView :onNameInput="setName" />
    <!-- <NextButton/> -->
=======
    <StartView />
<<<<<<< HEAD
    <NextButton path="emotion" />
>>>>>>> 2be8521 (started cleanup)
=======
    <NextButton path="emotionSetup" />
>>>>>>> 7517b70 (implemented promiseNoData loading view)
</template>


<style scoped>

</style>