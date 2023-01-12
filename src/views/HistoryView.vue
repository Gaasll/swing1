<template>
<h2>Your played songs</h2>

  <p>{{lastPlayed}}</p>
</template>

<script>
export default{
    name: "HistoryView",
    components: {
    },
    props: [ "lastPlayed",
            "refreshLastPlayed",
          ],
  

  
}
</script>

<style>

</style>