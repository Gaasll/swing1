<script>
import EmotionView from "../views/EmotionView.vue"
export default {
    name: "Emotion",
    components: {
        EmotionView,
    },
    props: ["model"],
    data() {
        return {
          emotions:["happy", "sad", "angry", "excited", "stressed", "scared", 
                    "confident", "embarassed", "horny", "cozy", "queer"],
        };
    },
    methods: {
        setEmotions(e) {
            this.model.setEmotions(e.target.parentNode.__vnode.key, e.target.checked);
            console.log(this.model.selectedEmotions);
        },
        getEmotions(){
            return Object.keys(this.model.emotions).map((emo) => {
                return {emotion: emo, checked: this.model.emotions[emo].checked}
            })
        }
    },
};
</script>

<template>
    <EmotionView :emotions="emotions" :onEmotionChange="setEmotions" /> 
    <!-- :emotions="getEmotions()" -->
</template>