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
import {useRoute} from 'vue-router';

export default {
    components: {
        SignInView,
        RegisterView
    },

    methods: {
        signInUser(email, password) {
            signIn(email, password);
            useRoute().path("/emotion");
        },
    },

}
</script>

<style scoped>

</style>