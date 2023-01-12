<script>
import EmotionView from "../views/EmotionView.vue"
import NextButton from "../components/NextButton.vue"
import {useRoute} from 'vue-router';

export default {
    name: "Emotion",
    components: {
        EmotionView,
        NextButton,
    },
    props: ["model", "rerenderKey"],
    methods: {
        setEmotions(e) {
            this.model.setEmotions(e.target.id, e.target.checked);
            console.log(this.model.selectedEmotions);
        },
        getEmotions(){
            return Object.keys(this.model.emotions).map((emo) => {
                return {emotion: emo, checked: this.model.emotions[emo].checked}
            })
        },
        checkIsFull(){
            return this.model.emotionsFull();
        },
        showButton(){
            const route = useRoute();
            return (route.path === '/emotionSetup');
        },
    },
};
</script>

<template>
    <EmotionView :emotions="getEmotions()"
                 :onEmotionChange="setEmotions"
                 :isFull="checkIsFull()"
                 :username="model.username"
                 />
    <NextButton v-if="showButton()" path="weatherSetup"/>
</template>