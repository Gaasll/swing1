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
//import PromiseNoData from '../views/PromiseNoData.vue'

export default { 
    name: "Playlist",
    components: {
        PlaylistView,
<<<<<<< HEAD
    },
<<<<<<< HEAD
    props: ["model", "promiseState"],
=======
    props: ["model", "keys"],
>>>>>>> c56d858 (minor fixes)
    methods: {
        showSearchResults(){
            console.log(this.model.songsPromiseState.data);
=======
        //PromiseNoData,
>>>>>>> 934a5a4 (alternative promise results added)
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