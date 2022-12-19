<script>
import StartView from '../views/StartView.vue'
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
    }
}
</script>

<template>
    <StartView :onNameInput="setName" />
    <!-- <NextButton/> -->
</template>


<style scoped>

</style>