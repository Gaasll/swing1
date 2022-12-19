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
}
</script>

<template>
    <StartView />
    <NextButton path="emotionSetup" />
</template>


<style scoped>

</style>