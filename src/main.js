import { createApp } from 'vue'
import App from './presenters/AppPresenter.vue'
import router from './router'
const app = createApp(App);

// attempt at making event buses
// import mitt from 'mitt';
// const emitter = mitt();
// app.config.globalProperties.emitter = emitter;
//export const eventBus = new Vue();

app.use(router).mount('#app')
