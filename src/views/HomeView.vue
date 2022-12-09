
<template>

<div class="sidebar">
      <Sidebar/>
    </div>
  <div class="greetings">
    <h1 class="green">An App Swings</h1>
    <br>
    <h3 class="green11">
      A change in the weather can be a nice change of mood at times. Other times it
      can be… frustrating. The combination of weather with our emotions can be
      interesting. Does the weather affect our mood? Do we have a “weather type”?
      Can music help?
    </h3>
  </div>  
</template>

<script  >
//using the components checkbox and NextButton under component section below. 
import Sidebar from "../components/Sidebar.vue";


export default {
  name: "HomeView",
  components: {
    Sidebar,
   
  },
  props: {
    title: String,
    counter: Number,
  },
  methods: {
    counterIncrement() {
      this.$emit("counter-increment");
    },

  },
};
</script>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  font-family: 'Didact Gothic';
  top: -10px;
}

h3 {
  font-size: 1.2rem;
  font-family: 'Didact Gothic';
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>