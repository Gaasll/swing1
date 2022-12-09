import { BASE_URL_WEATHER, API_KEY_WEATHER } from "./apiConfig.js";

import WeatherCard from "./components/WeatherCard";

const lat = 59.40; 
const lon = 17.95;

export default {
  name: "weather",
  components: {
  
    WeatherCard,

  },
  methods: {
    getWeather() {
      // Show loader right before making request
      this.loaderVisible = "visible";
      setTimeout(() => {
        fetch(
            BASE_URL_WEATHER+lat+'&lon='+lon+'&appid='+ API_KEY_WEATHER
        )

        
          .then((res) => res.json())
          .then((data) => {
            // Hide loader after fetch is done
            this.loaderVisible = "";
            const _icon = data.list[0].weather[0].icon;
            this.imgSrc = `http://openweathermap.org/img/wn/${_icon}@2x.png`;
            this.imgAlt = data.list[0].weather[0].description;
            this.temp = Math.round(data.list[0].main.temp).toString() + " °C";
            this.tempMin =
              Math.round(data.list[0].main.temp_min).toString() + "°";
            this.tempMax =
              Math.round(data.list[0].main.temp_max).toString() + "°";
            this.city = data.list[0].name + ",";
            this.country = data.list[0].sys.country;
            this.desc = data.list[0].weather[0].description;
            this.humid = `Humidity: ${data.list[0].main.humidity.toString()}%`;
            this.precip =
              "Precipitation: " +
              (data.list[0].rain ? data.list[0].rain["1h"] * 100 : "0") +
              "%";
          })
          .catch((err) => {
            console.log(err);
            // Show alert
            this.alertColor = "danger";
            this.alertMessage = "Data not found. Please check your input...";
            // Hide alert after 3 sec
            setTimeout(() => {
              this.alertColor = "";
              this.alertMessage = "";
            }, 3000);
          });
      }, 800);
    },
  },
  data() {
    return {
      imgSrc: "",
      imgAlt: "",
      temp: "",
      tempMin: "",
      tempMax: "",
      city: "",
      country: "",
      desc: "",
      humid: "",
      precip: "",
      loaderVisible: "",
      alertColor: "",
      alertMessage: "",
      api_key: API_KEY_WEATHER,
    };
  },
};