<template>  
  <div class="wrapper">
      <header>
        <h1 class="question"> Hi {{username}}! How are you feeling today?</h1>
      </header>
      <div class="check-form">
        <div class="emotion" v-for="emotion in emotions" :key="emotion.emotion">
          <input type="checkbox" class="checkbox" :id="emotion.emotion" :onChange="onCheckboxChange" v-if="emotion.checked" checked>
          <input type="checkbox" class="checkbox" :id="emotion.emotion" :onChange="onCheckboxChange" :disabled="isFull" v-else>
          <label :for="emotion.emotion"> {{ emotion.emotion }} </label>
        </div>
      </div>
  </div>
</template>

<script >

export default {
  name: "EmotionView",
  props: {
    emotions: Array,
    onEmotionChange: Function,
    isFull: Boolean,
    showSidebar: Boolean,
    showButton: Boolean,
    username: String, 
  },
  methods: {
    onCheckboxChange(e){
      this.onEmotionChange(e);
    },
  },
};
</script>

<style scoped>
    .check-form{
      width: 70%;
      margin: auto;
      margin-left: 19.2%;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
    }

    .emotion{
      font-size: larger;
      text-align:left;
      margin: 18px;
    }

    .checkbox{
        background-color: lightgrey;
    }

  @media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
@media (max-width: 520px){
  .check-form{
    grid-template-columns: auto;
  }
}
</style>