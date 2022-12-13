<script>
import EmotionView from "../views/EmotionView.vue"
import resolvePromise from "../resolvePromise.js";
export default {
    name: "EmotionPresenter",
    components: {
        EmotionView,
        resolvePromise,
    },
    
    data() {
        return {
          emotions:["happy", "sad", "angry", "excited", "stressed", "scared", 
                    "confident", "embarassed", "horny", "cozy", "queer"],
        }
    },
    methods: {

    },
};

</script>

<template>
    <EmotionView :emotions="emotions" >
    </EmotionView>
</template>