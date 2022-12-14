<template>
    <PlaylistView :username="username" :model="model "/>
</template>

<script>
import PlaylistView from '../views/PlaylistView.vue'

export default { 
    name: "Playlist",
    components: {
        PlaylistView,
    },
    props: ["model"],
}
</script>

<style scoped>

</style>