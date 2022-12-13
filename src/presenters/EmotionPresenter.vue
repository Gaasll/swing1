<script>
import EmotionView from "../views/EmotionView.vue"
export default {
    name: "EmotionPresenter",
    components: {
        EmotionView,
    },
    
    data() {
        return {
          emotions:["happy", "sad", "angry", "excited", "stressed", "scared", 
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
    <EmotionView :emotions="emotions" >
    </EmotionView>
</template>