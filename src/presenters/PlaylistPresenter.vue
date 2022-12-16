<template>
    <PlaylistView :username="username"/>
</template>

<script>
import PlaylistView from '../views/PlaylistView.vue'
//import PromiseNoData from '../views/PromiseNoData.vue'

export default { 
    name: "Playlist",
    components: {
        PlaylistView,
        //PromiseNoData,
        },
}
</script>

<style scoped>

</style>