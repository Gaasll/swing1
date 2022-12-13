<script>
import EmotionSidebarView from "../views/EmotionSidebarView.vue"
export default {
    name: "EmotionSidebar",
    components: {
        EmotionSidebarView,
    },
    data() {
        return {
          emotions:["happy", "sad", "angry", "excited", "stressed", "scared", 
                    "confident", "embarassed", "horny", "cozy", "queer"],
        };
    },
    methods: {
        // increment() {
        //     this.counter++;
        // },
    },
};

</script>

<template>
    <EmotionSidebarView :emotions="emotions" >
    </EmotionSidebarView>
</template>