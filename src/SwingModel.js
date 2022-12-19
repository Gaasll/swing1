import {getLocation} from "./locationSource.js";
import {getCurrentWeatherInfo} from "./weatherSource.js";
import {soundCloudSearch} from "./musicSource.js";
import resolvePromise from "./resolvePromise.js";

<<<<<<< HEAD
<<<<<<< HEAD
// const MAX_NO_ELEMENTS = 20;
=======
>>>>>>> 60f0223 (tar helg nu)
const MAX_SELECTED_EMOTIONS = 2;
const MIN_DURATION = 45_000;
const MAX_DURATION = 400_000;
//const MAX_NO_ELEMENTS = 20;
=======
const MAX_NO_ELEMENTS = 20;
const MAX_SELECTED_EMOTIONS = 2;
>>>>>>> 934a5a4 (alternative promise results added)
//const NO_PLAYLISTS = 5;
//const NO_SONGS_PER_PLAYLIST = 4;

class SwingModel{
    constructor(notify){
        this.observers = [notify];

        this.username = "user_name";
        
        this.locationPromiseState = {};
        this.weatherPromiseState = {};

        this.songsPromiseState = {};
        this.playlist = [];
        this.playerPromiseState = {};
        this.trackURL;

        this.emotions = {
                         "happy":       {checked: false, style: "Disco"},
                         "sad":         {checked: false, style: "Shoegaze"},
                         "angry":       {checked: false, style: "Death Metal"},
                         "excited":     {checked: false, style: "Synth-pop"},
                         "stressed":    {checked: false, style: "Downtempo"},
                         "scared":      {checked: false, style: "Dark Ambient"},
                         "confident":   {checked: false, style: "Modern Classical"},
                         "embarassed":  {checked: false, style: "Musical"},
                         "horny":       {checked: false, style: "Soul"},
                         "cozy":        {checked: false, style: "Indie Pop"},
                         "queer":       {checked: false, style: "IDM"}
                        }
        this.selectedEmotions = [];

        resolvePromise(getLocation(), this.locationPromiseState).then(this.getWeatherData.bind(this));
    }

<<<<<<< HEAD
    setPlaylist(song){
        this.playlist =[...this.playlist, song]
    }

=======
>>>>>>> 934a5a4 (alternative promise results added)
    getWeatherData(){
        resolvePromise(getCurrentWeatherInfo(this.locationPromiseState.data),
                       this.weatherPromiseState,
                       this.notifyObservers.bind(this));
    }

    setUsername(name){
        this.username = name;
    }

    setEmotions(emotion, isChecked){
        console.log(emotion);
        this.emotions[emotion].checked = isChecked;
        
        if (isChecked){            
            this.selectedEmotions.push(emotion);
        }
        else{
            let index = this.selectedEmotions.indexOf(emotion);
            if (index > -1){
                this.selectedEmotions.splice(index, 1);
            }
        }        
    }

    emotionsFull(){
        return this.selectedEmotions.length >= MAX_SELECTED_EMOTIONS;
    }

    searchSongs(){
        //function emotionToStyle(emotion){
        //    return this.emotions[emotion];
        //}
        
        //let searchParams = {q: this.weatherPromiseState.data.weather,
        //                    style_exact: this.selectedEmotions.length > 0 ? this.emotions[this.selectedEmotions[0]].style : ""};

        //console.log(searchParams);
        //resolvePromise(search(searchParams), this.songsPromiseState, this.notifyObservers.bind(this));
<<<<<<< HEAD
        
        let emotions = this.selectedEmotions.join(" ");
        let searchParams = {q: this.weatherPromiseState.data.weather + " " + emotions,
                            "duration from": MIN_DURATION,  "duration to":  MAX_DURATION,}
<<<<<<< HEAD
=======

        let searchParams = {q: this.weatherPromiseState.data.weather + " " + this.selectedEmotions[0],}
>>>>>>> 934a5a4 (alternative promise results added)
        resolvePromise(soundCloudSearch(searchParams), this.songsPromiseState, this.notifyObservers.bind(this))
=======
        resolvePromise(soundCloudSearch(searchParams), this.songsPromiseState)
>>>>>>> 7517b70 (implemented promiseNoData loading view)
        .then(this.exctractPlayerData.bind(this));
    }

    exctractPlayerData(){
<<<<<<< HEAD
<<<<<<< HEAD
        let rand = this.randInt(10);
        console.log(rand);
        let songData = {title: this.songsPromiseState.data[rand].title, url: this.songsPromiseState.data[rand].permalink_url};
        this.setPlaylist(songData);
        console.log(this.playlist[0].url);

=======
        console.log(this.songsPromiseState.data);
<<<<<<< HEAD
>>>>>>> 4910dfb (fixed inconsistent button behavior)
        let baseURL = "https://w.soundcloud.com/player/?"
        let playerData = {
            url: this.songsPromiseState.data[rand].uri,
            color: "#ff5500",
            auto_play: false,
=======
        let songURL = this.songsPromiseState.data[this.randInt(this.songsPromiseState.data.length)].uri;
        let baseURL = "https://w.soundcloud.com/player/?"
        let playerData = {
            url: songURL,
            //color: "#ff5500",
            color: "#5D3F7F",
            auto_play: true,
>>>>>>> 60f0223 (tar helg nu)
=======
        let baseURL = "https://w.soundcloud.com/player/?"
        let playerData = {
            url: this.songsPromiseState.data[0].uri,
            color: "#ff5500",
            auto_play: false,
>>>>>>> 934a5a4 (alternative promise results added)
            hide_related: false,
            show_comments: false,
            show_user: false,
            show_reposts: false,
            show_teaser: true,
            visual: true,
        }
        this.trackURL = baseURL + new URLSearchParams(playerData);
        this.notifyObservers();
    }
<<<<<<< HEAD
<<<<<<< HEAD
    /*
    randInt(){
        return Math.floor(Math.random() * MAX_NO_ELEMENTS);
=======

    randInt(n){
        return Math.floor(Math.random() * n);
>>>>>>> 60f0223 (tar helg nu)
    }
    */

    randInt(max) {
        let min = Math.ceil(1);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min);
      }
      
=======

    randInt(){
        return Math.floor(Math.random() * MAX_NO_ELEMENTS);
    }
>>>>>>> 934a5a4 (alternative promise results added)

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
<<<<<<< HEAD

    addObserver(toAdd){
        this.observers =[...this.observers, toAdd]}
=======
>>>>>>> 934a5a4 (alternative promise results added)
}

export default SwingModel