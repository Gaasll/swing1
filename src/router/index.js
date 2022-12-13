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
        path: '/emotion',
        component: () => import('../presenters/EmotionPresenter.vue'),
        props: { model: true }
    },
    {
        path: '/emotionsidebar',
        component: () => import('../presenters/EmotionSidebarPresenter.vue'),
    },
    {
        path: '/playing',
        component: () => import('../presenters/PlaylistPresenter.vue'),
    },
    {
        path: '/weather',
        component: () => import('../presenters/WeatherPresenter.vue'),
    },
    {
        path: '/weathersidebar',
        component: () => import('../presenters/WeatherSidebarPresenter.vue'),
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