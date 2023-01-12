<template>
  <div v-if="songTitle">
    <h2>Your last played songs</h2>
    <p>
      <a :href="songURL" target="_blank">{{songTitle}}</a>
    </p>
  </div>
  <div v-else>
    History is empty
  </div>
</template>

<script>
export default{
    name: "HistoryView",
    components: {
    },
    props: ["songTitle", "songURL", ],
}
</script>

<style>

</style>