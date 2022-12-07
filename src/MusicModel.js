import {getToken, getGenres, searchPlaylist} from "./musicSource.js";
import resolvePromise from "./resolvePromise.js";

class MusicModel{
    constructor(notify){
        this.tokenPromiseState = {};
        resolvePromise(getToken(), this.tokenPromiseState, notify);
        this.playlist = [];

        console.log(this.tokenPromiseState.data)
    }

    async searchPlaylists(){
        let categoriesPromiseState = {};
        let playlistsPromiseState = {};

        function printData() {
            console.log(categoriesPromiseState.data)
            console.log(playlistsPromiseState.data)
        }

        resolvePromise(getGenres(this.tokenPromiseState.data), categoriesPromiseState, printData);
        resolvePromise(searchPlaylist("blabla", this.tokenPromiseState.data), playlistsPromiseState, printData);
    }
}

export default MusicModel