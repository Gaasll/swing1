import {getCurrentWeather} from "./weatherSource.js";

class WeatherModel{

    constructor(location, weather){
        //this.observers= [];
        this.location;
        this.weather;
        //this.searchResultsPromiseState = {};
        //this.currentDishPromiseState = {};
    }

    setLocation(newLocation){
        this.location = newLocation}

    setWeather(newWeather){
        this.weather= newWeather}
}

export default WeatherModel;