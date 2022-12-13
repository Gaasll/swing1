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
            name:"",
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
    :name="name"
    :counter="counter" 
    @counter-increment="increment"
    ></StartView>
</template>