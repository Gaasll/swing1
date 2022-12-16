import {getLocation} from "./locationSource.js";
import {getCurrentWeatherInfo} from "./weatherSource.js";
import {soundCloudSearch} from "./musicSource.js";
import resolvePromise from "./resolvePromise.js";

const MAX_NO_ELEMENTS = 20;
const MAX_SELECTED_EMOTIONS = 2;
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

        let searchParams = {q: this.weatherPromiseState.data.weather + " " + this.selectedEmotions[0],}
        resolvePromise(soundCloudSearch(searchParams), this.songsPromiseState, this.notifyObservers.bind(this))
        .then(this.exctractPlayerData.bind(this));
    }

    exctractPlayerData(){
        let baseURL = "https://w.soundcloud.com/player/?"
        let playerData = {
            url: this.songsPromiseState.data[0].uri,
            color: "#ff5500",
            auto_play: false,
            hide_related: false,
            show_comments: false,
            show_user: false,
            show_reposts: false,
            show_teaser: true,
            visual: true,
        }
        this.trackURL = baseURL + new URLSearchParams(playerData);
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

export default SwingModel