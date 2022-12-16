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
<<<<<<< HEAD
        path: '/emotionsidebar',
        component: () => import('../presenters/EmotionSidebarPresenter.vue'),
=======
        path: '/emotion2',
        component: () => import('../presenters/EmotionPresenter.vue'),
        props: { model: true, keys: false},
>>>>>>> 4742420 (fixes to model and checkboxes plus small cleanups)
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
<<<<<<< HEAD
        path: '/weathersidebar',
        component: () => import('../presenters/WeatherSidebarPresenter.vue'),
=======
        path: '/weather2',
        component: () => import('../presenters/WeatherPresenter.vue'),
        props: { model: true , keys: true },
>>>>>>> 4742420 (fixes to model and checkboxes plus small cleanups)
    },
    {
        path: '/test',
        component: () => import('../views/TestView.vue'),
        props: { model: true, keys: false },
      },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL), routes,
})

export default router