<script setup>
import Emotions from "../presenters/Emotions.vue";
</script>

<template>
  <div>
    <Emotions title="How are you feeling today?"/>
     <div>
            <router-link to="/weather" class="button">
                <button>
                    <span class="material-icons">chevron_right</span>
                </button>
            </router-link>
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



