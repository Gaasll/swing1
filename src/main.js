import { createApp } from 'vue'
import App from './presenters/AppPresenter.vue'
import router from './router'
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBkGty7qzxkVNVDVLBgArjklLkeglA4XX8",
    authDomain: "swingmood-d93cb.firebaseapp.com",
    databaseURL: "https://swingmood-d93cb-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "swingmood-d93cb",
    storageBucket: "swingmood-d93cb.appspot.com",
    messagingSenderId: "575429519265",
    appId: "1:575429519265:web:798ac5e9f6d04935320de0",
  };

firebase.initializeApp(firebaseConfig)

const app = createApp(App);
app.use(router).mount('#app')
