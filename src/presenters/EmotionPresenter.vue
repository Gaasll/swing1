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
            title: "heyy Emo!",
            counter: 0,
            text: "tt",

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
        }
   
    },
};

</script>

<template>
    <EmotionView 
    :title="title" 
    :counter="counter" 
    @counter-increment="increment"
    @choose-emo="getValue"
    ></EmotionView>
</template>