<template>
    <HistoryView/>
</template>

<script>
import HistoryView from '../views/HistoryView.vue'
export default {
    components: {
        HistoryView,
    },
    props: ["model", "rerenderKey"],
}
</script>

<style>

</style>