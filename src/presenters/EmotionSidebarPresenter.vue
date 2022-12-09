<script>
import EmotionSidebarView from "../views/EmotionSidebarView.vue"
export default {
    name: "EmotionSidebarPresenter",
    components: {
        EmotionSidebarView,
    },
    
    data() {
        return {
            title: "heyy Emo!",
            counter: 0,
        };
    },

    methods: {
        increment() {
            this.counter++;
        },
    },
};

</script>

<template>
    <EmotionSidebarView 
    :title="title" 
    :counter="counter" 
    @counter-increment="increment"
    ></EmotionSidebarView>
</template>