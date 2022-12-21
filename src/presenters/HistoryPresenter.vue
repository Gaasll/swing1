<template>
    <Sidebar/>
    <HistoryView/>
</template>

<script>
import Sidebar from '../components/Sidebar.vue'
import HistoryView from '../views/HistoryView.vue'
export default {
    components: {
        Sidebar,
        HistoryView,
    },
    props: ["model", "rerenderKey"],
}
</script>

<style>

</style>