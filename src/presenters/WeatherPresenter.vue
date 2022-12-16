<script>
import WeatherView from '../views/WeatherView.vue'
import PromiseNoData from '../views/PromiseNoData.vue'
//import NextButton from "../components/NextButton.vue";

export default { 
    name: "Weather",
    components: {
        WeatherView,
        PromiseNoData,
        }
}
</script>

<template>
    <WeatherView v-if="promiseState.data"/> 
    <PromiseNoData v-else :promiseState="promiseState"/>
</template>


<style scoped>

</style>