<template>
    <div v-if="!promiseState">
        <p>No data</p>
    </div>
    <div v-else-if="promiseState.error">
        {{promiseState.error.error}}
    </div>
    <div v-else>
        <img src="https://img.pikbest.com/png-images/20190918/cartoon-snail-loading-loading-gif-animation_2734139.png!c1024wm0" class="loadingImage" />
    </div>
</template>

<script>
export default {
    props: ["promiseState"],
}
</script>

<style scoped>

</style>