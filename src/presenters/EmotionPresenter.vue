<script>
import EmotionView from "../views/EmotionView.vue"
<<<<<<< HEAD
//import resolvePromise from "../resolvePromise.js";
=======
import NextButton from "../components/NextButton.vue"
import Sidebar from "../components/Sidebar.vue"
import {useRoute} from 'vue-router';

>>>>>>> 7517b70 (implemented promiseNoData loading view)
export default {
    name: "EmotionPresenter",
    components: {
        Sidebar,
        EmotionView,
<<<<<<< HEAD
        //resolvePromise,
    },
    props: ["model"],
    data() {
        return {
          emotions: ["happy", "sad", "angry", "excited", "stressed", "scared", 
                    "confident", "embarassed", "horny", "cozy", "queer"],
        }
    },
=======
        NextButton,
    },
    props: ["model"],
>>>>>>> 7517b70 (implemented promiseNoData loading view)
    methods: {
<<<<<<< HEAD
<<<<<<< HEAD
        printEmo() {
  var checkboxes = document.getElementsByName('acs');
  var txt = "";
  var i;
  for (i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
      txt = txt + checkboxes[i].value + ", ";
    }
  }
  document.getElementById("order").value = "" + txt;
}
=======
        setEmotions(e) {
            this.model.setEmotions(e.target.parentNode.__vnode.key, e.target.checked);
            console.log(this.model.selectedEmotions);
        },
        getEmotions(){
            return Object.keys(this.model.emotions).map((emo) => {
                return {emotion: emo, checked: this.model.emotions[emo].checked}
            })
        },
        checkIsFull(){
            return this.model.emotionsFull();
<<<<<<< HEAD
        }
        // displayEmo() {
        //     var checkboxes = document.getElementById("emo");
            
        // },
>>>>>>> 810b16e (emotions handled by model plus half way to working weather widget)
=======

>>>>>>> de8d190 (minor changes)
=======
        },
        showSidebar() {
            const route = useRoute();
            return (route.path === '/emotion');
        },
        showButton(){
            const route = useRoute();
            return (route.path === '/emotionSetup');
        },
>>>>>>> 7517b70 (implemented promiseNoData loading view)
    },
    
};

</script>

<template>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    <EmotionView 
    :emotions="emotions" 
    @print-emo="printEmo"
    >
=======
    <EmotionView :emotions="Object.keys(model.emotions)" >
>>>>>>> d56bd0f6fd7f2945ccfb03dd9b7de052c06d6f29
    </EmotionView>
=======
    <EmotionView :emotions="getEmotions()" :onEmotionChange="setEmotions" />
>>>>>>> 810b16e (emotions handled by model plus half way to working weather widget)
=======
    <EmotionView :emotions="getEmotions()" :onEmotionChange="setEmotions" :isFull="checkIsFull()" /> 
    <!-- :emotions="getEmotions()" -->
>>>>>>> 4742420 (fixes to model and checkboxes plus small cleanups)
=======
    <Sidebar v-if="showSidebar()" />
    <EmotionView :emotions="getEmotions()"
                 :onEmotionChange="setEmotions"
                 :isFull="checkIsFull()"
                 />
    <NextButton v-if="showButton()" path="weatherSetup"/>
>>>>>>> 7517b70 (implemented promiseNoData loading view)
</template>