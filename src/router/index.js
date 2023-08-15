// Composables
import { createRouter, createWebHistory } from "vue-router";
import { useAppStore } from "@/store/app";

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
          import(/* webpackChunkName: "Chat" */ "@/views/Chat/Index.vue"),
      },
    ],
  },
  {
    path: "/completion",
    component: () => import("@/layouts/default/Default.vue"),
    children: [
      {
        path: "/completion",
        name: "Completion",
        component: () =>
          import(
            /* webpackChunkName: "Completion" */ "@/views/Completion/Index.vue"
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
          import(/* webpackChunkName: "Image" */ "@/views/Image/Index.vue"),
      },
    ],
  },
  {
    path: "/auth",
    name: "Auth",
    component: () => import("@/views/Auth/Index.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: "/", // Redirect to the home page for any unmatched routes
  },
];

// Set the requiresAuth meta field for all routes except /auth
routes.forEach((route) => {
  if (route.path !== "/auth") {
    route.meta = { requiresAuth: true };
  }
});

const router = createRouter({
  history: createWebHistory(process.env.VITE_BASE_URL),
  routes,
});

// Add navigation guard for handling unmatched routes
router.beforeEach((to, from, next) => {
  const appStore = useAppStore();
  const pageTitle = to.name ? to.name : "Sign in with Google";
  document.title = `${pageTitle} : AIHub Connect`;

  if (to.meta.requiresAuth && !appStore.isAuthenticated) {
    next({ name: "Auth" });
  } else if (to.name === "Auth" && appStore.isAuthenticated) {
    next(from.path || { name: "Home" });
  } else {
    next();
  }
});

export default router;
