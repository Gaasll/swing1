<script setup>
import Emotions from "../presenters/Emotions.vue";
import Sidebar from "../presenters/Sidebar.vue";
</script>

<template>
  <main>
    <Sidebar/>
    <Emotions title="How are you feeling today?"/>
  </main>
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