<template>
  <div>
      <SignInView/>
      <RegisterView/>
  </div>
</template>

<script>
import SignInView from '../views/SignInView';
import RegisterView from '../views/RegisterView';
import {signIn} from '../firebaseModel.js';

export default {
    components: {
        SignInView,
        RegisterView
    },

    methods: {
        signInUser(email, password) {
            console.log(email);
            console.log(password);
            signIn(email, password);
        },
    },

}
</script>

<style>

</style>