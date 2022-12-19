<script>
import EmotionView from "../views/EmotionView.vue"
import NextButton from "../components/NextButton.vue"
import Sidebar from "../components/Sidebar.vue"
import {useRoute} from 'vue-router';

export default {
    name: "Emotion",
    components: {
        Sidebar,
        EmotionView,
        NextButton,
    },
    props: ["model"],
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
        showSidebar() {
            const route = useRoute();
            return (route.path === '/emotion');
        },
        showButton(){
            const route = useRoute();
            return (route.path === '/emotionSetup');
        },
    },
};
</script>

<template>
    <Sidebar v-if="showSidebar()" />
    <EmotionView :emotions="getEmotions()"
                 :onEmotionChange="setEmotions"
                 :isFull="checkIsFull()"
                 />
    <NextButton v-if="showButton()" path="weatherSetup"/>
</template>