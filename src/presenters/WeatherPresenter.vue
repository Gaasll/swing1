<script>
import WeatherView from "../views/WeatherView.vue"
export default {
    name: "WeatherPresenter",
    components: {
        WeatherView,
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
    <WeatherView 
    :title="title" 
    :counter="counter" 
    @counter-increment="increment"
    ></WeatherView>
</template>