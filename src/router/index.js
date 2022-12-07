import {createRouter, createWebHistory} from 'vue-router'
//import HomeView from '../views/HomeView.vue'
//import IndexView from '../views/IndexView.vue'
//import WeatherView from '../views/WeatherView.vue'
//import PlayingNow from '../views/WeatherView.vue'

const routes = [
    {
        path: '/',
        component: () => import('../views/IndexView.vue'),
    },
    {
        path: '/emotion',
        component: () => import('../views/EmotionView.vue'),
    },
    {
        path: '/playing',
        component: () => import('../views/PlayingNow.vue'),
    },
    {
        path: '/weather',
        component: () => import('../views/WeatherView.vue'),
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL), routes,
})

export default router