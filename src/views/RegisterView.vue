<template>
    <form @submit.prevent="Register"> Sign up
            <input type="email" placeholder="email" v-model="email">
            <input type="password" placeholder="password" v-model="password">
            <input type="submit" value="login">
        <p>Register here <router-link to="/register"></router-link></p>
    </form>
</template>

<script>
export default {
    
}
</script>

<style>
</style>