<script>
import EmotionView from "../views/EmotionView.vue"
export default {
    name: "EmotionPresenter",
    components: {
        EmotionView,
    },
    props: ["model"],
    data() {
        return {
          emotions: ["happy", "sad", "angry", "excited", "stressed", "scared", 
                    "confident", "embarassed", "horny", "cozy", "queer"],
        }
    },
    methods: {
        // displayEmo() {
        //     var checkboxes = document.getElementById("emo");
            
        // },
    },
};

</script>

<template>
    <EmotionView :emotions="Object.keys(model.emotions)" >
    </EmotionView>
</template>