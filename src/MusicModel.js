import {getToken, getGenres, searchPlaylist} from "./musicSource.js";
import resolvePromise from "./resolvePromise.js";

class MusicModel{
    constructor(){
        this.tokenPromiseState = {};
        resolvePromise(getToken(), this.tokenPromiseState);
        this.playlist = [];

        console.log(this.tokenPromiseState.data)
    }

    async searchPlaylists(){
        let categoriesPromiseState = {};
        let playlistsPromiseState = {};
        resolvePromise(getGenres(this.tokenPromiseState.data), categoriesPromiseState);
        resolvePromise(searchPlaylist("blabla", this.tokenPromiseState.data), playlistsPromiseState);
        console.log(categoriesPromiseState.data)
        console.log(playlistsPromiseState.data)
    }
}

export default MusicModel