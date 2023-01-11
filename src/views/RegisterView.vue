<template>
    <div class="register-form-container">
        <form @submit.prevent="onFormSubmit" class="register-form">
            <h2>Sign up</h2>
            <span class="form-fields">
                <span>Display name: </span>
                <input type="text" placeholder="enter name here..." v-model="username">
                
                <span>Email: </span>
                <input type="email" placeholder="your email here..." v-model="email">
                
                <span>Password: </span>
                <input type="password" placeholder="choose a password" v-model="password">

                <span>Confirm password: </span>
                <input type="password" placeholder="re-type password" v-model="password_confirm">
            </span>
            <input type="submit" class="submit-button" value="Register">
            <p>Already have an account? <a href="#" @click="viewStateChange()">Sign in here</a></p>
        </form>
    </div>
</template>

<script>
export default {
    props: ['registerUser', 'viewStateChange'],
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

.submit-button {
    margin-top: 25px;
}
/*.register-form > * {
    display: block;
    margin: 30px;
}*/
</style>