<script setup>
import Emotions from "../components/Emotions.vue";
import NextButton from "../components/NextButton.vue";
</script>

<template>
  <div>
    <Emotions path="/emotion" title="How are you feeling today?"/>
     <div>
       <NextButton path="weather" />
            <!-- <router-link to="/weather" class="button">
                <button>
                    <span class="material-icons">chevron_right</span>
                </button>
            </router-link> -->
            <!-- <button href=""> <router-link to="/result"></router-link>Find your playlist </button> -->
      </div>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
    font-family: 'Didact Gothic';
  }
} 


</style>



