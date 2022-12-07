<script setup>
import Playing from "../presenters/Playing.vue";
import Sidebar from "../presenters/Sidebar.vue";
</script> 

<template>
  <div>
    <div class="sidebar">
      <Sidebar/>
    </div>
    <div class="playing">
      <Playing/>
    </div>
  </div>
</template>

<style scoped>
.playing{
  margin-left: 25%;
  margin-right: 25%;
  display: block;
}
</style>