<template>
     <header>
        <h1>Hello</h1>
        <h2>We aim to provide you with the perfect playlist, tailored to your mood and current situation. <br> 
            Answer a couple of questions and we will create a soundtrack to your day.
        </h2>
    </header>
</template>

<script>
</script>

<style>
    .text{
        margin: 5em;
    }

    .form-fields {
    display: grid;
    grid-template-columns: 9fr 11fr;
    grid-template-rows: repeat(30px);
    width: 55%;
    margin: auto;
    text-align: right;
    vertical-align: auto;
}

.form-fields > * {
    margin: 10px;
}

.submit-button {
    margin-top: 25px;
}
/*.register-form > * {
    display: block;
    margin: 30px;
}*/

</style>