<template>
  <div>
   
    <div class="greetings">
      <h1 class="fade-up">Swingmood</h1>
      
      <h3 class="fade-up">
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
  font-size: 40px;
  text-align: center;
  opacity: 0;
  animation: fadeUp 1s ease-in-out forwards;
}

.greetings h3 {
  text-align: center;
  margin-left: 150px;
  margin-right: 150px;
  font-size: 20px;
  opacity: 0;
  animation: fadeUp 2s ease-in-out forwards;
}

@media (max-width: 512px) {
  .greetings h3 {
    margin-left: 5px;
    margin-right: 5px;
    font-size: 14px;
  }

  h1{
    font-size: 20px;
  }
   h3{
    font-size: 20px;
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