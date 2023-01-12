<template>
    <h2>Sign in</h2>
   <form @submit.prevent="onFormSubmit" class="register-form">
       <p>Don't have an account? <a href="#" @click="viewStateChange()">Sign up here</a></p>
        <span class="form-fields">
                <span>E-mail: </span>
                <input type="email" class="inputField" placeholder="enter e-mail..." v-model="email">
                
                <span>Password: </span>
                <input type="password" class="inputField" placeholder="enter password..." v-model="password">
        </span>
            <NextButton @click="onFormSubmit()"/>
            <!-- <input type="submit" class="submit-button" value="Sign in"> -->
            
    </form>

</template>

<script>
import NextButton from "../components/NextButton.vue"
export default {
    props: ['viewStateChange', 'signInUser'],
    components: {
        NextButton,
    },
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

<style scoped>
h2{
    text-align: center;
}
.form-fields {
    /* text-align: left; */
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
    /* border: none; */
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