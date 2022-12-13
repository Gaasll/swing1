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
    },
    
};

</script>

<template>
<<<<<<< HEAD
    <EmotionView 
    :emotions="emotions" 
    @print-emo="printEmo"
    >
=======
    <EmotionView :emotions="Object.keys(model.emotions)" >
>>>>>>> d56bd0f6fd7f2945ccfb03dd9b7de052c06d6f29
    </EmotionView>
</template>