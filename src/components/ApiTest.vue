<script>
import MusicModel from "../MusicModel.js";
export default {
    data() {
        return {
            reactive: "",
            mm: new MusicModel(this.notify),
        }
    },
    methods: {
        notify(){
            this.reactive = this.reactive ? "" : " ";
            console.log(this.mm.songsPromiseState.data)
        },
        getSearch(){
            this.mm.searchSongs();
        }
    },
}
</script>

<template>
    <div>
        Hello, dear devs!
    </div>
    <div>
        <button @click="getSearch">Search</button>
    </div>
    <div>
        {{this.mm.playlist || this.reactive}}
    </div>
</template>