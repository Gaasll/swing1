<template>
  <div>
    <div class="greetings">
      <h1>Swingmood</h1>
      <br>
      <h3>
        We aim to provide you with the perfect playlist tailored to your mood and current situation.
        We all know emotions affect our... well emotions. So does weather. The combination of weather and emotions is 
        especially powerful. Music can either enhance or shift our feelings. What will it be?
      </h3>
    </div>  
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

.greetings h1 {
  text-align: center;
}
.greetings h3 {
  text-align: left;
  margin-left: 150px;
  margin-right: 150px;
}

@media (max-width: 512px) {
  .greetings h3 {
  margin-right: 5px;
  }
}
</style>
