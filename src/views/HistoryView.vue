<template>


  <div v-if="songTitle">
    <h2>Your last played songs</h2>
     <h3>
   <a :href="songURL" target="_blank">{{songTitle}}</a>
    </h3> 
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



h2{
  font-weight: 500;
  font-size: 40px;
  text-align: center;
  opacity: 0;
  animation: fadeUp 1s ease-in-out forwards;
}

h3 {
  font-weight: 500;
  font-size: 20px;
  text-align: center;
  opacity: 0;
  animation: fadeUp 2s ease-in-out forwards;
}

@media (max-width: 512px) {
  .greetings h3 {
    margin-left: 5px;
    margin-right: 5px;
    font-size: 14px;
  }

  h2{
    font-size: 20px;
  }
   h3{
    font-size: 14px;
  }

  .card{
    max-width: 200px;
  }
}

@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

</style>