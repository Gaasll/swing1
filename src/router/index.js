import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import weatherView from "../views/weather.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/HomeView.vue"),
    },
    {
			path: '/emotion',
			component: () => import('../views/Emotion.vue')
		},

    {
			path: '/playing',
			component: () => import('../views/playing.vue')
		},

    {
			path: '/weather',
			component: () => import('../views/Weather.vue')
		},
  ],
});

export default router;
