import {getCurrentWeatherInfo} from "./weatherSource.js";

class WeatherModel{

    constructor(location = 'king city', weather = 'sunny', timeOfDay){
        //this.observers= [];
        this.location;
        this.weather;
        this.timeOfDay;
        //this.searchResultsPromiseState = {};
        //this.currentDishPromiseState = {};
    }

    async setWeatherData(){
        let data = await getCurrentWeatherInfo();
        this.weather = data.weather;
        this.location = data.location;
        this.timeOfDay = data.location;

    }
        

    
}

export default WeatherModel;