<script>
import HomeView from '../views/HomeView.vue'
import Sidebar from "../components/Sidebar.vue";

export default { 
    name: "Home",
    components: {
        HomeView,
        Sidebar,
        }
}
</script>

<template>
    <Sidebar />
    <HomeView />
</template>