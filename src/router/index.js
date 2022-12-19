import {createRouter, createWebHistory} from 'vue-router'

const routes = [
    {
        path: '/',
        component: () => import('../presenters/StartpagePresenter.vue'),
        props: { model: false, rerenderKey: false },
    },
    {
        path: '/home',
        component: () => import('../presenters/HomePresenter.vue'),
        props: { model: false, rerenderKey: false },
    },
    {
        path: '/emotionSetup',
        component: () => import('../presenters/EmotionPresenter.vue'),
        props: { model: true, rerenderKey: false },
    },
    {
        path: '/emotion',
        component: () => import('../presenters/EmotionPresenter.vue'),
        props: { model: true, rerenderKey: false },
    },
    {
        path: '/playing',
        component: () => import('../presenters/PlaylistPresenter.vue'),
        props: { model: true, rerenderKey: true },
    },
    {
        path: '/weatherSetup',
        component: () => import('../presenters/WeatherPresenter.vue'),
        props: { model: true, rerenderKey: true },
    },
    {
        path: '/weather',
        component: () => import('../presenters/WeatherPresenter.vue'),
        props: { model: true, rerenderKey: true },
    },
    {
        path: '/history',
        component: () => import('../views/PromiseNoData.vue'),
        props: { model: true, rerenderKey: false },
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL), routes,
})

export default router