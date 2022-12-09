<template>
    <div class="weather-view-container">
      <div class="search-box">
        <input
          type="text"
          class="search-bar"
          placeholder="Search for a city"
          v-model="query"
          @keypress="fetchWeather"
        />
      </div>
      <LoadingSpinner v-if="isLoading" />
      <div class="error-container" v-if="error">
        <div class="weather-container">
          <div class="weather-wrap">
            <div class="error-container-title">Error</div>
            <div class="error-container-text">
              Sorry, an error has occurred. Please try again.
            </div>
          </div>
        </div>
      </div>
      <div class="weather-container" v-if="!isLoading || !error">
        <div class="weather-wrap" v-if="typeof weather.list != 'undefined'">
          <div class="location-box">
            <div class="location">
              {{ weather.city.name }}, {{ weather.city.country }}
            </div>
            <div class="date">
              {{ formatDate(weather.list[0].dt_txt) }}
            </div>
          </div>
          <div class="weather-box">
            <div class="temp">{{ Math.round(weather.list[0].main.temp) }}°C</div>
            <div class="weather">{{ weather.list[0].weather[0].main }}</div>
            <div class="weather-icon">
              <img
                :src="
                  require(`@/assets/${weather.list[0].weather[0].icon}.png`)
                "
                alt="Icon of current weather"
              />
            </div>
          </div>
        </div>
      </div>
      <div
        class="weather-container forecast-container"
        v-if="!isLoading || !error"
      >
        <div class="forecast-wrap" v-if="typeof weather.list != 'undefined'">
          <div class="forecast-box">
            <div class="date">
              {{ formatDate(weather.list[8].dt_txt) }}
            </div>
            <div class="temp">{{ Math.round(weather.list[8].main.temp) }}°C</div>
            <div class="weather">{{ weather.list[8].weather[0].main }}</div>
            <div class="weather-icon">
              <img
                :src="
                  require(`@/assets/${weather.list[8].weather[0].icon}.png`)
                "
                alt="Icon of current weather"
              />
            </div>
          </div>
          <div class="forecast-box">
            <div class="date">
              {{ formatDate(weather.list[16].dt_txt) }}
            </div>
            <div class="temp">{{ Math.round(weather.list[16].main.temp) }}°C</div>
            <div class="weather">{{ weather.list[16].weather[0].main }}</div>
            <div class="weather-icon">
              <img
                :src="
                  require(`@/assets/${weather.list[16].weather[0].icon}.png`)
                "
                alt="Icon of current weather"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import LoadingSpinner from './LoadingSpinner.vue';
  import {  API_KEY_WEATHER } from "../apiConfig.js";
  export default {
    name: 'App',
    components: { LoadingSpinner },
    data() {
      return {
        // For direct calls to the OpenWeather API
         api_key: API_KEY_WEATHER,
         url_base: 'https://api.openweathermap.org/data/2.5/',
        //url_base: 'https://weather-app-backend-ten.vercel.app/',
        query: '',
        weather: {},
        isLoading: false,
        error: false,
        key: API_KEY_WEATHER
      };
    },
    methods: {
      fetchWeather(e) {
        if (e.key === 'Enter') {
          this.isLoading = true;
          fetch(
            // For direct calls to the OpenWeather API
             `${this.url_base}forecast?q=${this.query}&units=metric&appid=${this.api_key}`
            //`${this.url_base}?q=${this.query}&units=metric`
          )
            .then((resp) => {
              this.isLoading = false;
              return resp.json();
            })
            .then(this.setResults)
            .catch((error) => {
              this.setError();
              console.error('Error:', error);
            });
        }
      },
      setResults(results) {
        this.error = false;
        this.weather = results;
      },
      setError() {
        this.weather = {};
        this.error = true;
      },
      formatDate(date) {
        return new Date(date).toLocaleDateString('en-US', {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        });
      },
    },
    watch: {
      weather(newWeather) {
        const app = document.querySelector('#app');
        // Rain
        if (
          typeof newWeather.list != 'undefined' &&
          newWeather.list[0].weather[0].main === 'Rain'
        ) {
          app.classList.remove('snow', 'hot');
          app.classList.add('rain');
        }
        // Snow or cold
        else if (
          (typeof newWeather.list != 'undefined' &&
            newWeather.list[0].weather[0].main === 'Snow') ||
          (typeof newWeather.list != 'undefined' &&
            newWeather.list[0].main.temp < 0)
        ) {
          app.classList.remove('rain', 'hot');
          app.classList.add('snow');
        }
        // Hot
        else if (
          typeof newWeather.list != 'undefined' &&
          newWeather.list[0].main.temp > 24
        ) {
          app.classList.remove('rain', 'snow');
          app.classList.add('hot');
        } else {
          app.classList.remove('rain', 'snow', 'hot');
        }
      },
    },
  };
  </script>
  
  <style>
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap');
  .weather-view-container {
    flex-grow: 1;
  }
  .search-box {
    max-width: 500px;
    margin: 0 auto;
    margin-bottom: 30px;
  }
  .search-box .search-bar {
    display: block;
    width: 100%;
    padding: 15px;
    color: black;
    font-size: 20px;
    appearance: none;
    outline: none;
    background: none;
    background-color: rgba(255, 255, 255, 0.5);
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.25);
    border: none;
    border-radius: 20px;
    transition: 0.4s;
  }
  .search-box .search-bar:focus {
    background-color: rgba(255, 255, 255, 0.75);
    box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.25);
  }
  .weather-container {
    max-width: 500px;
    margin: 0 auto;
    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 16px;
    box-shadow: 3px 6px rgba(0, 0, 0, 0.25);
  }
  .weather-wrap {
    padding: 20px;
  }
  .location-box .location {
    color: var(--text-color);
    font-size: 32px;
    font-weight: 500;
    text-align: center;
    text-shadow: 1px 3px rgba(0, 0, 0, 0.25);
  }
  .location-box .date {
    color: var(--text-color);
    font-size: 20px;
    font-weight: 300;
    font-style: italic;
    text-align: center;
  }
  .weather-box {
    text-align: center;
  }
  .weather-box .temp {
    display: inline-block;
    padding: 10px 25px;
    color: var(--text-color);
    font-size: 102px;
    font-weight: 900;
    text-shadow: 3px 6px rgba(0, 0, 0, 0.25);
  }
  .weather-box .weather {
    color: var(--text-color);
    font-size: 48px;
    font-weight: 700;
    font-style: italic;
    text-shadow: 3px 6px rgba(0, 0, 0, 0.25);
  }
  .weather-box .icon {
    color: var(--text-color);
    font-size: 48px;
    font-weight: 700;
    text-shadow: 3px 6px rgba(0, 0, 0, 0.25);
  }
  .forecast-container {
    margin-top: 25px;
  }
  .forecast-box {
    text-align: center;
  }
  .forecast-wrap {
    padding: 20px;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
  }
  .forecast-box .date {
    color: var(--text-color);
    font-size: 16px;
    font-weight: 300;
    font-style: italic;
    text-align: center;
  }
  .forecast-box .temp {
    display: inline-block;
    padding: 10px 25px;
    color: var(--text-color);
    font-size: 40px;
    font-weight: 700;
    text-shadow: 1px 3px rgba(0, 0, 0, 0.25);
  }
  .forecast-box .weather {
    color: var(--text-color);
    font-size: 25px;
    font-weight: 700;
    font-style: italic;
    text-shadow: 1px 3px rgba(0, 0, 0, 0.25);
  }
  .error-container-title {
    color: var(--text-color);
    font-size: 32px;
    font-weight: 700;
    text-align: center;
    text-shadow: 1px 3px rgba(0, 0, 0, 0.25);
  }
  .error-container-text {
    color: var(--text-color);
    font-size: 20px;
    font-weight: 500;
    text-align: center;
  }
  </style>