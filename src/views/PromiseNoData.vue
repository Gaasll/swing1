<template>
    <div v-if="!promiseState.promise">
        <p>No data</p>
    </div>
    <div v-else-if="promiseState.error">
        {{promiseState.error.error}}
        {{error}}
    </div>
    <div v-else>
        Loading...
        <!-- <iframe src="https://giphy.com/embed/3oEjI6SIIHBdRxXI40" width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/mashable-3oEjI6SIIHBdRxXI40"></a></p> -->
        <img src="https://img.pikbest.com/png-images/20190918/cartoon-snail-loading-loading-gif-animation_2734139.png!c1024wm0" class="loadingImage" />
    </div>
</template>

<script>
import { onErrorCaptured, ref } from 'vue'
export default {
    props: ["promiseState"],
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

<style scoped>

</style>