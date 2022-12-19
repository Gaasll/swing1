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
<<<<<<< HEAD
        props: { model: true, keys: false},
    },
    {
<<<<<<< HEAD
        path: '/emotionsidebar',
        component: () => import('../presenters/EmotionSidebarPresenter.vue'),
=======
        path: '/emotion2',
        component: () => import('../presenters/EmotionPresenter.vue'),
        props: { model: true, keys: false},
>>>>>>> 4742420 (fixes to model and checkboxes plus small cleanups)
=======
        props: { model: true, rerenderKey: false },
>>>>>>> 7517b70 (implemented promiseNoData loading view)
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
<<<<<<< HEAD
<<<<<<< HEAD
        path: '/weathersidebar',
        component: () => import('../presenters/WeatherSidebarPresenter.vue'),
=======
        path: '/weather2',
        component: () => import('../presenters/WeatherPresenter.vue'),
        props: { model: true , keys: true },
>>>>>>> 4742420 (fixes to model and checkboxes plus small cleanups)
=======
        path: '/history',
        component: () => import('../views/PromiseNoData.vue'),
        props: { model: true, rerenderKey: false },
>>>>>>> 7517b70 (implemented promiseNoData loading view)
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL), routes,
})

export default router