<template>
<<<<<<< HEAD
<<<<<<< HEAD
    <div v-if="!promiseState.promise">
=======
    <div v-if="!promiseState">
>>>>>>> 934a5a4 (alternative promise results added)
        <p>No data</p>
    </div>
    <div v-else-if="promiseState.error">
        {{promiseState.error.error}}
<<<<<<< HEAD
=======
    <div v-if="!promiseState.promise">
        <div v-if="dependencyPromiseState">
            <PromiseNoData :promiseState="dependencyPromiseState" />
        </div>
        <p v-else>No data</p>
    </div>
    <div v-else-if="promiseState.error">
        {{promiseState.error.error}}
>>>>>>> 7517b70 (implemented promiseNoData loading view)
        {{error}}
    </div>
    <div v-else>
        Loading...
        <!-- <iframe src="https://giphy.com/embed/3oEjI6SIIHBdRxXI40" width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/mashable-3oEjI6SIIHBdRxXI40"></a></p> -->
<<<<<<< HEAD
=======
    </div>
    <div v-else>
>>>>>>> 934a5a4 (alternative promise results added)
        <img src="https://img.pikbest.com/png-images/20190918/cartoon-snail-loading-loading-gif-animation_2734139.png!c1024wm0" class="loadingImage" />
=======
        <!--img src="https://img.pikbest.com/png-images/20190918/cartoon-snail-loading-loading-gif-animation_2734139.png!c1024wm0" class="loadingImage" /-->
>>>>>>> 7517b70 (implemented promiseNoData loading view)
    </div>
</template>

<script>
<<<<<<< HEAD
<<<<<<< HEAD
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

=======
export default {
    props: ["promiseState"],
}
>>>>>>> 934a5a4 (alternative promise results added)
=======
//import { onErrorCaptured, ref } from 'vue'
export default {
    props: ["promiseState", "dependencyPromiseState"],
    //setup(){
    //    const error = ref(null);
    //    onErrorCaptured((e)=>{
    //        error.value = e;
    //        return true;
    //    })
    //    return { error };
    //}
    created() {
        console.log(this.promiseState);
        console.log(this.dependencyPromiseState);
    }
}

>>>>>>> 7517b70 (implemented promiseNoData loading view)
</script>

<style scoped>

</style>