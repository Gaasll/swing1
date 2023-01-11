<template>
  <div>
    <AppView :model="model" :rerenderKey="rerenderKey" />
  </div>
</template>

<script>
import AppView from '../views/AppView.vue'
import SwingModel from '../SwingModel.js'
import firebase from 'firebase/app';
import '../firebaseModel.js';
import { useRouter, useRoute } from 'vue-router';

export default {
  name: 'App',
  components: {
    AppView,
  },
  data() {
    return{
      model: new SwingModel(this.rerender.bind(this)),
      rerenderKey: 0,
    }
  },
  methods: {
    rerender(){
      this.rerenderKey += 1;
    },
    redirect(){
      console.log("You have reached the function")
      const router = useRouter();
      const route = useRoute();
      firebase.auth().onAuthStateChanged((user=>{
        console.log("getting promise...", user)
        if (!user){
          alert("You have to create a user")
          console.log("You have to create a user")
          router.replace('/login')
        } else if (route.path == '/login' || route.path == '/register') {
          console.log("You are logged in")
          router.replace('/')
        }
      }))
    }
  },
  beforeMount() {
    //this.redirect();
  }
}
</script>