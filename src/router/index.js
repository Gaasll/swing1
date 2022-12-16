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
        path: '/emotion1',
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
        path: '/weather1',
        component: () => import('../presenters/WeatherPresenter.vue'),
        props: { model: true , keys: true },
    },
    {
        path: '/weather2',
        component: () => import('../presenters/WeatherPresenter.vue'),
        props: { model: true , keys: true },
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