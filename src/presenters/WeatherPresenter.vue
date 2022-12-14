<script>
import WeatherView from '../views/WeatherView.vue'
//import NextButton from "../components/NextButton.vue";

export default { 
    name: "Weather",
    components: {
        WeatherView,
    },
    props: ["model", "keys"],
}
</script>

<template>
    <WeatherView :model="model" :keys="keys" />
</template>


<style scoped>

</style>