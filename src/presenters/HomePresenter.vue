<script>
import HomeView from "../views/HomeView.vue"
export default {
    name: "HomePresenter",
    components: {
        HomeView,
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
    <HomeView 
    :title="title" 
    :counter="counter" 
    @counter-increment="increment"
    ></HomeView>
</template>