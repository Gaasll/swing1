<script>
import EmotionSidebarView from "../views/EmotionSidebarView.vue"
export default {
    name: "EmotionSidebar",
    components: {
        EmotionSidebarView,
    },
    methods: {
        increment() {
            this.counter++;
        },
    },
};

</script>

<template>
    <EmotionSidebarView/>
</template>