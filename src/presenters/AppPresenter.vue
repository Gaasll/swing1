<template>
  <div>
    <AppView :model="model" :keys="keys" :showSidebar="showSidebar()" />
  </div>
</template>

<script>
import AppView from '../views/AppView.vue'
import SwingModel from '../SwingModel.js'
import resolvePromise from "../resolvePromise.js";
import { updateFirebaseFromModel, updateModelFromFirebase, firebaseModelPromise, signIn, createUser } from "../firebaseModel";

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
    notifyACB(){  
        if (this.promiseState.data){
            updateModelFromFirebase(this.promiseState.data);
            updateFirebaseFromModel(this.promiseState.data);}
        },
  },
  created(){ 
    resolvePromise(firebaseModelPromise(), this.promiseState, this.notifyACB)
  },
}
</script>