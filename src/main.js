import { createApp } from 'vue'
import App from './presenters/AppPresenter.vue'
import router from './router'
const app = createApp(App);


app.use(router).mount('#app')
