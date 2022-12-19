<template>
    <PlaylistView :username="model.username"
                  :selectedEmotions="model.selectedEmotions"
                  :weather="model.weatherPromiseState.data.weather"
                  :iconURL="model.weatherPromiseState.data.icon"
                  :trackURL="model.trackURL" />
</template>

<script>
import PlaylistView from '../views/PlaylistView.vue'

export default { 
    name: "Playlist",
    components: {
        PlaylistView,
    },
    props: ["model", "keys"],
    methods: {
        showSearchResults(){
            console.log(this.model.songsPromiseState.data);
        }
    },
    created(){
        this.showSearchResults();
        window.location.hash = "sidebar";
    }
}
</script>

<style scoped>

</style>