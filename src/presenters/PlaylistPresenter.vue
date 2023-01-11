<template>
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
    </div>
</template>

<script>
import PlaylistView from '../views/PlaylistView.vue'
import PromiseNoData from '@/views/PromiseNoData.vue';

export default { 
    name: "Playlist",
    components: {
        PlaylistView,
        PromiseNoData,
    },
    props: ["model", "rerenderKey"],
    methods: {
        searchMusic(){
            if(!this.model.trackURL && this.model.weatherPromiseState.data){
                this.model.searchSongs();
            }
        },
    },
}
</script>

<style scoped>

</style>