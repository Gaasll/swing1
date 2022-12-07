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
            if(this.mm && this.mm.tokenPromiseState.data){
                this.reactive = this.reactive ? "" : " ";
            }
        },
        getSearch(){
            this.mm.searchPlaylists();
        }
    },
}
</script>

<template>
    <div>
        Hello, dear devs! {{(this.mm.tokenPromiseState.data || this.reactive)}}
    </div>
    <div>
        <button @click="getSearch">Search</button>
    </div>
</template>