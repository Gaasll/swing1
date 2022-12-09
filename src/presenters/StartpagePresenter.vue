<script>
import StartView from "../views/StartView.vue"
export default {
    name: "StartpagePresenter",
    components: {
        StartView,
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
    <StartView 
    :title="title" 
    :counter="counter" 
    @counter-increment="increment"
    ></StartView>
</template>