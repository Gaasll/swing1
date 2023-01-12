<template>
    <div v-if="!promiseState.promise">
        <div v-if="dependencyPromiseState">
            <PromiseNoData :promiseState="dependencyPromiseState" />
        </div>
        <p v-else>No data</p>
    </div>
    <div v-else-if="promiseState.error">
        {{promiseState.error.error}}
        {{error}}
    </div>
    <div v-else>
        <h3>
            Loading, please wait...
        </h3>
    </div>
</template>

<script>
export default {
    props: ["promiseState", "dependencyPromiseState"],
}

</script>

<style scoped>

</style>