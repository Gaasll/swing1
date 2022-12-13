<template>
    <PlaylistView :username="username"/>
</template>

<script>
import PlaylistView from '../views/PlaylistView.vue'

export default { 
    name: "Playlist",
    components: {
        PlaylistView,
        },
}
</script>

<style scoped>

</style>