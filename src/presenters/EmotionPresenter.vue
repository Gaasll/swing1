<script>
import EmotionView from "../views/EmotionView.vue"
//import resolvePromise from "../resolvePromise.js";
export default {
    name: "EmotionPresenter",
    components: {
        EmotionView,
        //resolvePromise,
    },
    props: ["model"],
    data() {
        return {
          emotions: ["happy", "sad", "angry", "excited", "stressed", "scared", 
                    "confident", "embarassed", "horny", "cozy", "queer"],
        }
    },
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
        }
        // displayEmo() {
        //     var checkboxes = document.getElementById("emo");
            
        // },
>>>>>>> 810b16e (emotions handled by model plus half way to working weather widget)
=======

>>>>>>> de8d190 (minor changes)
    },
    
};

</script>

<template>
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
</template>