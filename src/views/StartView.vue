<template>
    <header>
        <h1 class="fade-up">Hello</h1>
        <h2 class="fade-up">We aim to provide you with the perfect playlist, tailored to your mood and current situation.
            <br>
            Log in and fill in your current emotions and we will create a soundtrack to your day.
        </h2>
    </header>
</template>

<script>
</script>

<style scoped>
h1,
h2 {
    opacity: 0;
    animation-duration: 1s;
    animation-fill-mode: forwards;
}


h1 {
  
  font-size: 40px;
  text-align: center;
  
}

h2{
  
  font-size: 20px;
  text-align: center;
  
}

h1.fade-up {
    animation-name: fadeUp;
}

h2.fade-up {
    animation-name: fadeUp;
    animation-delay: 0.7s;
}

@keyframes fadeUp {
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@media screen and (max-width: 480px) {
    h2 {
        font-size: 14px;
    }
}
</style>