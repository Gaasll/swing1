<template>  
  <div class="wrapper">
      
        
        <h1 class="question"> Hi {{username}}! How are you feeling today?</h1>
      
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
.check-form {
  width: 70%;
  margin: auto;
  margin-left: 19.2%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}

.emotion {
  font-size: larger;
  text-align: left;
  margin: 18px;
}

.checkbox {
  background-color: lightgrey;
  /* Add the following styles for smaller screens */
  width: 20px;
  height: 20px;
}

/* Change color when user checks in to purple */
.checkbox:checked+label {
  color: purple;
}

.question {
  opacity: 0;
  animation: fade-up 1s ease forwards;
}

@keyframes fade-up {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.check-form {
  opacity: 0;
  animation: fade-up 1s ease forwards 0.5s;
}

@media (max-width: 520px) {
  .check-form {
    width: 90%;
    margin: auto;
    margin-left: 5%;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  }

  .emotion {
    font-size: 11px;
    margin: 10px;
  }

  /* Add the following styles for smaller screens */
  .checkbox {
    width: 11px;
    height: 11px;
  }

  h1{
    font-size: 20px;
  }
}
</style>