import {createRouter, createWebHistory} from 'vue-router'

const routes = [
    {
        path: '/',
        component: () => import('../presenters/StartpagePresenter.vue'),
    },
    {
        path: '/home',
        component: () => import('../presenters/HomePresenter.vue'),
    },
    {
        path: '/emotion1',
        component: () => import('../presenters/EmotionPresenter.vue'),
        props: { model: true }
    },
    {
        path: '/emotion2',
        component: () => import('../presenters/EmotionPresenter.vue'),
    },
    {
        path: '/playing',
        component: () => import('../presenters/PlaylistPresenter.vue'),
        props: { model: true }
    },
    {
        path: '/weather1',
        component: () => import('../presenters/WeatherPresenter.vue'),
        props: { model: true , keys: true }
    },
    {
        path: '/weather2',
        component: () => import('../presenters/WeatherPresenter.vue'),
    },
    {
        path: '/test',
        component: () => import('../views/TestView.vue'),
        props: { model: true }
      },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL), routes,
})

export default router