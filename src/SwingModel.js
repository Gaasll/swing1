import {getLocation} from "./locationSource.js";
import {getCurrentWeatherInfo} from "./weatherSource.js";
import {soundCloudSearch} from "./musicSource.js";
import resolvePromise from "./resolvePromise.js";

const MAX_SELECTED_EMOTIONS = 2;
const MIN_DURATION = 55_000;
const MAX_DURATION = 400_000;
//const MAX_NO_ELEMENTS = 20;
//const NO_PLAYLISTS = 5;
//const NO_SONGS_PER_PLAYLIST = 4;

class SwingModel{
    constructor(notify, emotions){
        this.observers = [notify];

        this.username = "";
        this.userUID = "";
        
        this.locationPromiseState = {};
        this.weatherPromiseState = {};

        this.songsPromiseState = {};
        this.playlist = [];
        this.playerPromiseState = {};
        this.trackURL;
        this.lastPlayed = "heyyo";
        

        this.emotions = emotions || {
                         "happy":       {checked: false,},
                         "sad":         {checked: false,},
                         "angry":       {checked: false,},
                         "excited":     {checked: false,},
                         "stressed":    {checked: false,},
                         "scared":      {checked: false,},
                         "confident":   {checked: false,},
                         "embarassed":  {checked: false,},
                         "horny":       {checked: false,},
                         "cozy":        {checked: false,},
                         "queer":       {checked: false,}
                        }
        this.selectedEmotions = [];

        resolvePromise(getLocation(), this.locationPromiseState).then(this.getWeatherData.bind(this));
    }

    setPlaylist(song){
        this.playlist =[...this.playlist, song]
    }

    getWeatherData(){
        resolvePromise(getCurrentWeatherInfo(this.locationPromiseState.data),
                       this.weatherPromiseState,
                       this.notifyObservers.bind(this));
    }

    setUsername(name){
        this.username = name;
        //console.log("this is your username", this.username);
        this.notifyObservers({username: this.username});
    }

    setUID(uid){
        this.uid = uid;
    }

    setEmotions(emotion, isChecked){
        //console.log(emotion);
        this.emotions[emotion].checked = isChecked;
        
        if (isChecked){            
            this.selectedEmotions = [...this.selectedEmotions, emotion];
        }
        else{
            let index = this.selectedEmotions.indexOf(emotion);
            if (index > -1){
                this.selectedEmotions = this.selectedEmotions.filter((em) => em !== emotion);
            }
        }

        this.notifyObservers({emotions: this.emotions});
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
        
        let emotions = this.selectedEmotions.join(" ");
        let searchParams = {q: this.weatherPromiseState.data.weather + " " + emotions,
                            "duration from": MIN_DURATION,  "duration to":  MAX_DURATION,}
        resolvePromise(soundCloudSearch(searchParams), this.songsPromiseState)
        .then(this.exctractPlayerData.bind(this));
    }

    exctractPlayerData(){
        //console.log(this.songsPromiseState.data);
        let songURL = this.songsPromiseState.data[this.randInt(this.songsPromiseState.data.length)].uri;
        let baseURL = "https://w.soundcloud.com/player/?"
        let playerData = {
            url: songURL,
            //color: "#ff5500",
            color: "#5D3F7F",
            auto_play: true,
            hide_related: false,
            show_comments: false,
            show_user: false,
            show_reposts: false,
            show_teaser: true,
            visual: true,
        }
        this.lastPlayed = { url: songURL};
        this.trackURL = baseURL + new URLSearchParams(playerData);
        this.notifyObservers();
    }

    randInt(n){
        return Math.floor(Math.random() * n);
    }

    // randInt(max) {
    //     let min = Math.ceil(1);
    //     max = Math.floor(max);
    //     return Math.floor(Math.random() * (max - min) + min);
    // }
      

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

    addObserver(toAdd){
        this.observers =[...this.observers, toAdd]}
}

export default SwingModel