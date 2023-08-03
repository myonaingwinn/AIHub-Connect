// Composables
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("@/layouts/default/Default.vue"),
    children: [
      {
        path: "/",
        name: "Home",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "home" */ "@/views/Home.vue"),
      },
    ],
  },
  {
    path: "/chat",
    component: () => import("@/layouts/default/Default.vue"),
    children: [
      {
        path: "/chat",
        name: "Chat",
        component: () =>
          import(
            /* webpackChunkName: "AskMeEverything" */ "@/views/Chat/Index.vue"
          ),
      },
    ],
  },
  {
    path: "/image",
    component: () => import("@/layouts/default/Default.vue"),
    children: [
      {
        path: "/image",
        name: "Image",
        component: () =>
          import(
            /* webpackChunkName: "AskMeEverything" */ "@/views/Image/Index.vue"
          ),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.VITE_BASE_URL),
  routes,
});

export default router;
