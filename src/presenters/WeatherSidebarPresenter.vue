<script>
import WeatherSidebarView from "../views/WeatherSidebarView.vue"
export default {
    name: "WeatherSidebarPresenter",
    components: {
        WeatherSidebarView,
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
    <WeatherSidebarView 
    :title="title" 
    :counter="counter" 
    @counter-increment="increment"
    ></WeatherSidebarView>
</template>