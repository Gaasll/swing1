<template>
    <HistoryView :username="model.username"
                 :songTitle="model.lastPlayed.name"
                 :songURL="model.lastPlayed.url" />
</template>

<script>
import HistoryView from '../views/HistoryView.vue'


export default {
    components: {
        HistoryView,
    },
    props: ["model", "rerenderKey"],

    methods: {
    },
    created(){
        console.log(this.model.lastPlayed);
    }
}
</script>

<style>

</style>