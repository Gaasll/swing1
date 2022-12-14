import {getLocation} from "./locationSource.js";
import {getCurrentWeatherInfo} from "./weatherSource.js";
import {search} from "./musicSource.js";
import resolvePromise from "./resolvePromise.js";

const MAX_NO_ELEMENTS = 20;
//const NO_PLAYLISTS = 5;
//const NO_SONGS_PER_PLAYLIST = 4;

class SwingModel{
    constructor(notify){
        this.observers = [notify];

        this.username;
        
        this.locationPromiseState = {};
        this.weatherPromiseState = {};

        this.searchParams = {q: "cloud", style_exact: "Acoustic"};
        this.songsPromiseState = {};
        this.playlist = [];

        this.emotions = {
                         "happy":       {checked: false, style: "Disco"},
                         "sad":         {checked: false, style: "Shoegaze"},
                         "angry":       {checked: false, style: ""},
                         "excited":     {checked: false, style: ""},
                         "stressed":    {checked: false, style: ""},
                         "scared":      {checked: false, style: ""},
                         "confident":   {checked: false, style: ""},
                         "embarassed":  {checked: false, style: ""},
                         "horny":       {checked: false, style: ""},
                         "cozy":        {checked: false, style: ""},
                         "queer":       {checked: false, style: ""}
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

    searchSongs(){
        //function emotionToStyle(emotion){
        //    return this.emotions[emotion];
        //}
        
        let searchParams = this.searchParams;

        searchParams["style_exact"] = this.selectedEmotions; //.map(emotionToStyle);
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

export default SwingModel