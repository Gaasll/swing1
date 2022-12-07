import WeatherEnum from "../../models/weatherEnum";
import { VuexModule, Module, Mutation, Action } from 'vuex-module-decorators';

@Module({ namespaced: true })
class Weather extends VuexModule {

  public weather: string = WeatherEnum.SUN;

  @Mutation
  public setWeather(newWeather: string): void {
    this.weather = newWeather;
  }

  @Action
  public updateWeather(newWeather: string) {
    switch (newWeather) {
      case "Sunny":
        newWeather = WeatherEnum.SUN;
        break;
      case "Clear":
        newWeather = WeatherEnum.NIGHT;
        break;
      case "Partly Cloudy":
      case "Cloudy":
      case "Overcast":
        newWeather = WeatherEnum.CLOUD;
        break;
      case "Patchy rain nearby":
      case "Patchy light rain":
      case "Light rain":
      case "Moderate rain at times":
      case "Moderate rain":
      case "Heavy rain at times":
      case "Heavy rain":
      case "Light freezing rain":
      case "Moderate or heavy freezing rain":
      case "Light rain shower":
      case "Moderate or heavy rain shower":
      case "Torrential rain shower":
        newWeather = WeatherEnum.RAIN;
        break;
      case "Patchy snow nearby":
      case "Blowing snow":
      case "Patchy light snow":
      case "Light snow":
      case "Patchy moderate snow":
      case "Moderate snow":
      case "Patchy heavy snow":
      case "Heavy snow":
      case "Light snow showers":
      case "Moderate or heavy snow showers":
        newWeather = WeatherEnum.SNOW;
        break;
      case "Mist":
      case "Patchy freezing drizzle nearby":
      case "Patchy light drizzle":
      case "Patchy sleet nearby":
      case "Fog":
      case "Light drizzle":
      case "Freezing drizzle":
      case "Heavy freezing drizzle":
      case "Light sleet":
      case "Moderate or heavy sleet":
      case "Light sleet showers":
      case "Moderate or heavy sleet showers":
        newWeather = WeatherEnum.MIST;
        break;
      case "Blizzard":
        newWeather = WeatherEnum.BLIZZARD;
        break;
      case "Ice pellets":
      case "Light showers of ice pellets":
        newWeather = WeatherEnum.ICE_PELLETS;
        break;
      case "Thundery outbreaks in nearby":
      case "Patchy light rain in area with thunder":
      case "Moderate or heavy rain in area with thunder":
      case "Patchy light snow in area with thunder":
      case "Moderate or heavy snow in area with thunder":
        newWeather = WeatherEnum.THUNDER;
        break;
      default:
        newWeather = WeatherEnum.RAIN;
    }
    this.context.commit('setWeather', newWeather);
  }
}
export default Weather;