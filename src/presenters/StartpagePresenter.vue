<script>
import StartView from '../views/StartView.vue'
//import NextButton from "../components/NextButton.vue";

export default { 
    name: "Startpage",
    components: {
        StartView,
        
    },
    props: ["model", "keys"],
}
</script>

<template>
    <StartView />
    <!-- <NextButton/> -->
</template>


<style scoped>

</style>