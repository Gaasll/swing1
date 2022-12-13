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
    <EmotionView 
    :emotions="emotions" 
    @print-emo="printEmo"
    >
    </EmotionView>
</template>