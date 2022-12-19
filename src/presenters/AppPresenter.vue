<template>
    <!-- <div v-if="error"> {{error}} </div> -->
    <Suspense>
        <template #default>
          <div>
            <AppView :model="model" :keys="keys" />
          </div>
        </template>
        <template #fallback>
          <div>Loading</div>
        </template>
    </Suspense>
</template>

<script>
import AppView from '../views/AppView.vue'
import SwingModel from '../SwingModel.js'
import { onErrorCaptured, ref, Suspense } from 'vue'

export default {
  name: 'App',
  components: {
    AppView,
    Suspense,
  },
  data() {
    return{
      model: new SwingModel(this.rerender.bind(this)),
      keys: {weather: 0,},
    }
  },
  methods: {
    rerender(){
      this.keys.weather += 1;
    },
  },
  setup(){
        const error = ref(null);
        onErrorCaptured((e)=>{
            error.value = e;
            return true;
        })
        return { error };
    }
}
</script>