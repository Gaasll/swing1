import {createRouter, createWebHistory} from 'vue-router'

const routes = [
    {
        path: '/',
        component: () => import('../presenters/StartpagePresenter.vue'),
        props: { model: false, keys: false },
    },
    {
        path: '/home',
        component: () => import('../presenters/HomePresenter.vue'),
        props: { model: false, keys: false },
    },
    {
        path: '/emotion',
        component: () => import('../presenters/EmotionPresenter.vue'),
        props: { model: true, keys: false},
    },
    {
        path: '/emotion2',
        component: () => import('../presenters/EmotionPresenter.vue'),
        props: { model: true, keys: false},
    },
    {
        path: '/playing',
        component: () => import('../presenters/PlaylistPresenter.vue'),
        props: { model: true, keys: false },
    },
    {
        path: '/weather',
        component: () => import('../presenters/WeatherPresenter.vue'),
        props: { model: true , keys: true },
    },
    {
        path: '/weather2',
        component: () => import('../presenters/WeatherPresenter.vue'),
        props: { model: true , keys: true },
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL), routes,
})

export default router