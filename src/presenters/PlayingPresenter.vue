<script>
import PlayingView from "../views/PlayingView.vue"
export default {
    name: "PlayingPresenter",
    components: {
        PlayingView,
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
    <PlayingView 
    :title="title" 
    :counter="counter" 
    @counter-increment="increment"
    ></PlayingView>
</template>