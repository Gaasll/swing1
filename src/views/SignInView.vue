<template>
    <br><br><br><br><br><br>
    <div class="signin">
        <h2>Sign in</h2>
        <form @submit.prevent="onFormSubmit" class="register-form">
            <div class="form-field">
                
                <input type="email" class="inputField" id="email" placeholder="Enter e-mail..." v-model="email">
            </div>
            <div class="form-field">
                
                <input type="password" class="inputField" id="password" placeholder="Enter password..." v-model="password">
            </div>
            <p>Don't have an account? <a href="#" @click="viewStateChange()">Sign up here.</a></p>
             <NextButton @click="onFormSubmit"/>
            <div class="form-field">
                
                
            </div>
        </form>
    </div>
</template>

<script>
import NextButton from "../components/NextButton.vue";
export default {
    props: ['viewStateChange', 'signInUser'],
    components: {
        NextButton,
    },
    data() {
        return {
            email: '',
            password: '',
        };
    },
    methods: {
        onFormSubmit() {
            this.signInUser(this.email, this.password);
        },
    },
};
</script>

<style scoped>
.signin {
    width: 100%;
    animation-name: fade-up;
    animation-duration: 4s;
    animation-fill-mode: forwards;
    opacity: 0;
    transform: translateY(50px);
}

@keyframes fade-up {
    from {
        opacity: 0;
        transform: translateY(50px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}
h2 {
    text-align: center;
    margin-bottom: 20px;
    font-size: 24px;
}

form.register-form {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.form-field {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
    width: 100%;
}

.form-field label {
    margin-bottom: 5px;
    font-size: 16px;
}

.inputField {
    border-radius: 25px;
    border: 2px solid #609;
    padding: 10px;
    width: 20%;
    height: 30px;
    font-size: 16px;
    
}

.submit-button {
    border-radius: 25px;
    border: 2px solid #609;
    background-color: #609;
    color: #fff;
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.2s ease-in-out;
    width: 100%;
    margin-top: 20px;
}

.submit-button:hover {
    background-color: #fff;
    color: #609;
}

p {
    margin-top: 10px;
    font-size: 14px;
    text-align: center;
}

@media (max-width: 768px) {
    h2 {
        font-size: 20px;
    }

    .inputField {
    height: 10px;
    width: 70%;
    font-size: 5px;
    

  }

   .inputField::placeholder {
        font-size: 12px;
    }

  

    .inputField,
    .submit-button,
    p {
        font-size: 14px;
    }

}
</style>