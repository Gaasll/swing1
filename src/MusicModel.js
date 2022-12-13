import {search} from "./musicSource.js";
import resolvePromise from "./resolvePromise.js";

const MAX_NO_ELEMENTS = 20;
//const NO_PLAYLISTS = 5;
//const NO_SONGS_PER_PLAYLIST = 4;

class MusicModel{
    constructor(notify){
        this.observers = [notify];

        this.searchParams = {q: "cloud", style_exact: "Acoustic"};

        this.songsPromiseState = {};
        this.playlist = [];

        this.emotions = {"happy": "",
                         "sad": "",
                         "angry": "",
                         "excited": "",
                         "stressed": "",
                         "scared": "",
                         "confident": "",
                         "embarassed": "",
                         "horny": "",
                         "cozy": "",
                         "queer": ""}
    }

    searchSongs(){
        resolvePromise(search(this.searchParams), this.songsPromiseState, this.notifyObservers.bind(this));
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