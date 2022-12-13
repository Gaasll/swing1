<script>
import EmotionView from "../views/EmotionView.vue"
export default {
    name: "EmotionPresenter",
    components: {
        EmotionView,
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
    <EmotionView 
    :title="title" 
    :counter="counter" 
    @counter-increment="increment"
    ></EmotionView>
</template>