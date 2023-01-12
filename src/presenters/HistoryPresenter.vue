<template>
    <HistoryView :username="model.username"
                 :refreshLastPlayed="model.exctractPlayerData"
                 :lastPlayed="getLastPlayed" />
</template>

<script>
import HistoryView from '../views/HistoryView.vue'


export default {
    components: {
        HistoryView,
        
    },
    props: ["model", "rerenderKey"],

    methods: {

        getLastPlayed(){
        this.model.exctractPlayerData();
        }
    }
}
</script>

<style>

</style>