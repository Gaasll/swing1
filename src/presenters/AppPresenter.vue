<template>
  <div>
    <AppView :model="model" :keys="keys" :showSidebar="showSidebar()" />
  </div>
</template>

<script>
import AppView from '../views/AppView.vue'
import SwingModel from '../SwingModel.js'
import firebase from 'firebase';
import { useRouter, useRoute } from 'vue-router';
import { onBeforeMount } from 'vue';

export default {
  name: 'App',
  components: {
    AppView,
  },
  data() {
    return{
      model: new SwingModel(this.rerender.bind(this)),
      keys: {weather: 0,},
      promiseState: {}
    }
  },
  methods: {
    rerender(){
      this.keys.weather += 1;
    },
    showSidebar(){
      return window.location.hash == 'sidebar';
    },
    // notifyACB(){  
    //     if (this.promiseState.data){
    //         updateModelFromFirebase(this.promiseState.data);
    //         updateFirebaseFromModel(this.promiseState.data);}
    //     },
  },
  setup(){
    const router = useRouter();
    const route = useRoute();
    onBeforeMount( () => {
      firebase.auth().onAuthStateChanged((user=>{
        if (!user){
          router.replace('/')
        } else if (route.path == '/' || route.path == '/register') {
          router.replace('/emotion1')
        }
      }))
    });
  },
  // created(){ 
  //   resolvePromise(firebaseModelPromise(), this.promiseState, this.notifyACB)
  // },
}
</script>