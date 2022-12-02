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
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),

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
