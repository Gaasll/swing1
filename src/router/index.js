import {createRouter, createWebHistory} from 'vue-router'

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
        component: () => import('../presenters/EmotionPresenter.vue'),
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
    {
        path: '/test',
        component: () => import('../views/TestView.vue')
      },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL), routes,
})

export default router