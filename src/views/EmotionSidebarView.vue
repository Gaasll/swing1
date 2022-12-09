<script setup>
import EmotionView from "../views/EmotionView.vue";
import Sidebar from "../components/Sidebar.vue";
</script>

<template>
  <main>
    <Sidebar/>
    <EmotionView />
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