<script>
import HomeView from '../views/HomeView.vue';

export default { 
    name: "Home",
    components: {
        HomeView,
    },
    props: ["model", "rerenderKey"],
}
</script>

<template>
    <HomeView />
</template>