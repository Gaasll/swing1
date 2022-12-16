<template>
    <PlaylistView v-if="promiseStateBoolean()"
                :username="model.username"
                :selectedEmotions="model.selectedEmotions"
                :weather="model.weatherPromiseState.data.weather"
                :iconURL="model.weatherPromiseState.data.icon"
                :trackURL="model.trackURL" />
    <div v-else>
        <PromiseNoData :promiseState="this.model.songsPromiseState" />
    </div>
</template>

<script>
import PlaylistView from '../views/PlaylistView.vue'

export default { 
    name: "Playlist",
    components: {
        PlaylistView,
    },
    props: ["model", "promiseState"],
    methods: {
        showSearchResults(){
            console.log(this.model.songsPromiseState.data);
        },
        promiseStateBoolean(){
            return this.model.weatherPromiseState.data && this.model.trackURL;
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