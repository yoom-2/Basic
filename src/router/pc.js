import Vue from "vue";
import VueRouter from "vue-router";
import Index from "@views.pc/Index.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "index",
    component: Index,
    redirect: "/main",
    children: [
      {
        path: "/main",
        name: "main",
        component: () => import("@views.pc/main/Index"),
      },
      {
        path: "/magazine",
        name: "magazine",
        component: () => import("@views.pc/magazine/Index"),
      },
      {
        path: "/shop",
        name: "shop",
        component: () => import("@views.pc/shop/Index"),
      },
      {
        path: "/service",
        name: "service",
        component: () => import("@views.pc/service/Index"),
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
