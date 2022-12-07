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
        path: '/home',
        component: () => import('../views/HomeView.vue'),
    },
    {
        path: '/emotion',
        component: () => import('../views/EmotionView.vue'),
    },
    {
        path: '/emotionsidebar',
        component: () => import('../views/EmotionSidebar.vue'),
    },
    {
        path: '/playing',
        component: () => import('../views/PlayingNow.vue'),
    },
    {
        path: '/weather',
        component: () => import('../views/WeatherView.vue'),
    },
    {
        path: '/weathersidebar',
        component: () => import('../views/WeatherSidebar.vue'),
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL), routes,
})

export default router