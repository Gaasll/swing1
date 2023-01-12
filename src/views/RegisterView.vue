<template>
    <div class="register-form-container">
        <form @submit.prevent="onFormSubmit" class="register-form">
            <h2>Sign up</h2>
            <p>Already have an account? <a href="#" @click="viewStateChange()">Sign in here</a></p>
            <span class="form-fields">
                <span>Display name: </span>
                <input class="inputField" type="text" placeholder="enter name here..." v-model="username">

                <span>Email: </span>
                <input class="inputField" type="email" placeholder="your email here..." v-model="email">
                
                <span>Password: </span>
                <input class="inputField" type="password" placeholder="choose a password" v-model="password">

                <span>Confirm password: </span>
                <input class="inputField" type="password" placeholder="re-type password" v-model="password_confirm">
            </span>
            <NextButton @click="onFormSubmit()"/>
        </form>
    </div>
</template>

<script>
import NextButton from "../components/NextButton.vue"
export default {
    props: ['registerUser', 'viewStateChange'],
    components: {
        NextButton
    },
    data() {
        return {
            email: '',
            password: '',
            password_confirm: '',
            username: '',
        }
    },
    methods: {
        onFormSubmit() {
            this.registerUser(this.username, this.email, this.password, this.password_confirm);
        }
    },
}
</script>

<style scoped>
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
.inputField {
    border-radius: 25px;
    border: 2px solid #609;
    padding: 10px; 
    width: 200px;
    height: 15px; 
}

.submit-button {
    margin-top: 25px;
}

form.register-form {
    margin-bottom: 50px;
}
</style>