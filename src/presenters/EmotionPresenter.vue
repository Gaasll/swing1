<script>
import EmotionView from "../views/EmotionView.vue"
//import Checkbox from "../components/Checkbox.vue"
export default {
    name: "EmotionPresenter",
    components: {
        EmotionView,
    },
    
    data() {
        return {
      
            emotions: [ "Sad","Silly","Cozy","Flirty", "Angry", "Queer","Horny","Happy","Scared",   "Lonely", "Hungry", "Stressed",   "Confident","Melancholic", "Embarassed"],

        };
    },

    methods: {
        increment() {
            this.counter++;
        },

        
        getValue() {
      var checkboxes = document.getElementsByName('acs');
  
            var result = "";
  
            for (var i = 0; i < checkboxes.length; i++) {
                if (checkboxes[i].checked) {
                    result += checkboxes[i].value 
                        + " " + ", ";
                }
            }
            alert("you have selected: "+ result);
        },

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
    :title="title" 
    :counter="counter" 
    :emotions="emotions"
    @counter-increment="increment"
    @choose-emo="getValue"
    @print-emo="printEmo"
    ></EmotionView>
</template>