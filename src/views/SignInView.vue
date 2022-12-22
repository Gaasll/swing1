<template>
    <h2>Sign in</h2>
   <form @submit.prevent="onFormSubmit" class="register-form">

        <span class="form-fields">
                <span>E-mail: </span>
                <input type="email" placeholder="enter e-mail..." v-model="email">
                
                <span>Password: </span>
                <input type="password" placeholder="enter password..." v-model="password">
                </span>
                <input type="submit" class="submit-button" value="Sign in">

            <p>Don't have an account? <a href="#" @click="viewStateChange()">Sign up here</a></p>
    </form>

</template>

<script>
export default {
    props: ['viewStateChange', 'signInUser'],
    data() {
        return {
            email: '',
            password: '',
        }
    },
    methods: {
        onFormSubmit() {
            this.signInUser(this.email, this.password);
        }
    },

}
</script>

<style>

</style>