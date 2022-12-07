import Vuex from 'vuex';
import weather from '@/store/modules/weather';

const store = new Vuex.Store({
  modules: {
    weather: weather
  }
});

export default store;