import {getToken, getGenres, searchPlaylists} from "./musicSource.js";
import resolvePromise from "./resolvePromise.js";

const MAX_NO_ELEMENTS = 20;
const NO_PLAYLISTS = 5;
const NO_SONGS_PER_PLAYLIST = 4;

class MusicModel{
    constructor(notify){
        this.observers = [notify];

        this.searchParams = {q: "rain", type: "playlist", limit: MAX_NO_ELEMENTS};

        this.tokenPromiseState = {data: "BQAaqVhSWEPIoyHdGp0VdLHexbKErZNGkNloLD_Lxm3NaGKg0v4O7JAt3b_o_0rxGJxXgfKCjgGY3DjO431NJxi5LdbjMWcedIHVywtJKLV_fZY1RtY"};
        this.playlistsPromiseState = {};
        this.songsPromiseState = {};
        this.playlist = [];

        //this.tokenPromiseState.data = "jai098h3";
        //this.playlistsPromiseState.data = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

        //resolvePromise(getToken(), this.tokenPromiseState, notify);
    }

    searchPlaylists(){
        resolvePromise(searchPlaylists(this.searchParams, this.tokenPromiseState.data),
        this.playlistsPromiseState, this.searchSongsInPlaylist.bind(this));
    }

    searchSongsInPlaylist(){
        if (this.playlistsPromiseState.data){
            this.playlist = new Array(NO_PLAYLISTS);
            this.playlist.map(x => 1); //this.playlistsPromiseState.data[this.randInt()].id);
        }
        console.log(this.playlist)
        this.notifyObservers();
    }

    randInt(){
        return Math.floor(Math.random() * MAX_NO_ELEMENTS);
    }

    notifyObservers(payload){
        function callObserverCallback(obs){
            try{
                obs(payload);
            }
            catch(err){
                console.error(err);
            }
        }

        this.observers.forEach(callObserverCallback);
    }
}

export default MusicModel