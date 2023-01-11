<template>
  <div>
    <AppView :model="model" :rerenderKey="rerenderKey" :hasSidebar="hasSidebar"/>
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
      sidebarHidden: ['/', '/emotionSetup', '/weatherSetup'],
    }
  },
  methods: {
    rerender(){
      this.rerenderKey += 1;
    },
    hasSidebar(){
      return ! (this.sidebarHidden.find((entry) => entry === useRoute().path));
    },
    redirect(){
      const router = useRouter();
      const route = useRoute();
      firebase.auth().onAuthStateChanged((user=>{
        console.log("getting promise...", user)
        if (!user){
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