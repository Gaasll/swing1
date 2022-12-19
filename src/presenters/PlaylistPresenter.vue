<template>
<<<<<<< HEAD
    <PlaylistView v-if="promiseStateBoolean()"
                :username="model.username"
                :selectedEmotions="model.selectedEmotions"
                :weather="model.weatherPromiseState.data.weather"
                :iconURL="model.weatherPromiseState.data.icon"
                :trackURL="model.trackURL" />
    <div v-else>
        <PromiseNoData :promiseState="this.model.songsPromiseState" />
=======
    <Sidebar />
    <div :key="rerenderKey">
        <div v-if="this.model.weatherPromiseState.data">
            <PlaylistView :username="model.username"
                          :selectedEmotions="model.selectedEmotions"
                          :weather="model.weatherPromiseState.data.weather"
                          :iconURL="model.weatherPromiseState.data.icon"
                          :trackURL="model.trackURL"
                          :refreshTrackURL="searchMusic" />
        </div>
        <div v-else>
            <PromiseNoData :promiseState="this.model.weatherPromiseState"
                           :dependencyPromiseState="this.model.locationPromiseState" />
        </div>
>>>>>>> 7517b70 (implemented promiseNoData loading view)
    </div>
</template>

<script>
import PlaylistView from '../views/PlaylistView.vue'
<<<<<<< HEAD
//import PromiseNoData from '../views/PromiseNoData.vue'
=======
import Sidebar from "../components/Sidebar.vue";
import PromiseNoData from '@/views/PromiseNoData.vue';
>>>>>>> 7517b70 (implemented promiseNoData loading view)

export default { 
    name: "Playlist",
    components: {
        PlaylistView,
<<<<<<< HEAD
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
=======
        Sidebar,
        PromiseNoData,
    },
    props: ["model", "rerenderKey"],
    methods: {
        searchMusic(){
            if(!this.model.trackURL && this.model.weatherPromiseState.data){
                this.model.searchSongs();
            }
        },
>>>>>>> 7517b70 (implemented promiseNoData loading view)
    },
}
</script>

<style scoped>

</style>