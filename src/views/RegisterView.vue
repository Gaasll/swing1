<template>

    <br><br><br><br><br><br>
    <div class="register-form-container">
        <form @submit.prevent="onFormSubmit" class="register-form">
            <h2>Sign up</h2>
            <p>Already have an account? <br><a href="#" @click="viewStateChange()">Sign in here.</a></p>
            <div class="form-fields">
                <div>
                    
                    <input id="username" class="input-field" type="text" placeholder="Display name"
                        v-model="username">
                </div>
                <br>
                <div>
                    
                    <input id="email" class="input-field" type="email" placeholder="E-mail"
                        v-model="email">
                </div>
                <br>
                <div>
                    
                    <input id="password" class="input-field" type="password" placeholder="Password"
                        v-model="password">
                </div>
                <br>
                <div>
                    
                    <input id="password_confirm" class="input-field" type="password" placeholder="Confirm password"
                        v-model="password_confirm">
                </div>
                <NextButton @click="onFormSubmit"/>
            </div>
            
        </form>
    </div>
</template>

<script>
import NextButton from "../components/NextButton.vue";
export default {
    props: ['registerUser', 'viewStateChange'],
    components: {
        NextButton,
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
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
    width: 100%;
}

.input-field {
    border-radius: 25px;
    border: 2px solid #609;
    padding: 10px;
    width: 100%;
}

.submit-button {
    border-radius: 25px;
    background-color: #609;
    color: white;
    padding: 10px 20px;
    border: none;
    font-size: 16px;
}

form.register-form {
    width: 60%;
    margin: auto;
    text-align: center;
}

@media (max-width: 768px) {
    .form-fields {
        grid-template-columns: 100px 1fr;
       
    }

    .submit-button {
        font-size: 14px;
        padding: 8px 16px;
    }

     .input-field::placeholder {
        font-size: 12px;
    }

 

     p {
        font-size: 14px;
    }
}</style>