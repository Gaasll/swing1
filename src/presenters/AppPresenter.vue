<template>
  <div>
    <AppView v-if="modelPromiseState.data" :model="modelPromiseState.data" :rerenderKey="rerenderKey" :hasSidebar="hasSidebar"/>
    <PromiseNoData v-else :promiseState="modelPromiseState" />
  </div>
</template>

<script>
import AppView from '../views/AppView.vue'
import firebase from 'firebase/app';
import {firebaseModelPromise, updateFirebaseFromModel, updateModelFromFirebase} from '../firebaseModel.js';
import resolvePromise from '@/resolvePromise';
import { useRouter, useRoute } from 'vue-router';
import PromiseNoData from '@/views/PromiseNoData.vue';

export default {
  name: 'App',
  components: {
    AppView,
    PromiseNoData
},
  data() {
    return{
      modelPromiseState: {},
      rerenderKey: 0,
      sidebarHidden: ['/', '/emotionSetup', '/weatherSetup'],
    }
  },
  methods: {
    modelCreated(){
      if (this.modelPromiseState.data) {
        updateModelFromFirebase(this.modelPromiseState.data);
        updateFirebaseFromModel(this.modelPromiseState.data);
      }
    },
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
        if (!user){
          resolvePromise(firebaseModelPromise(this.rerender.bind(this)), this.modelPromiseState, this.modelCreated);
          console.log("You have to create a user")
          router.replace('/')
        } else if (route.path === '/') {
          if (this.modelPromiseState.data) {updateModelFromFirebase(this.modelPromiseState.data);}
          console.log("You are logged in")
          router.replace('/emotionSetup')
        }
      }))
    }
  },
  created() {
    resolvePromise(firebaseModelPromise(this.rerender.bind(this)), this.modelPromiseState, this.modelCreated);
  },
  beforeMount() {
    this.redirect();
  },
}
</script>