<script>
import StartView from '../views/StartView.vue'
//import NextButton from "../components/NextButton.vue";

export default { 
    name: "Startpage",
    components: {
        StartView,
    },
    props: {
      username: {
        type: String,
        required: true
      }
    },
}
</script>

<template>
    <StartView :username="username" />
    <!-- <NextButton/> -->
</template>


<style scoped>

</style>