import Vue from "vue";
import VueRouter from "vue-router";
import Cover from "../views/Cover.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Cover",
    component: Cover,
  },
  {
    path: "/main",
    name: "Main",
    component: () => import("../views/Main.vue"),
  },
  {
    path: "/final",
    name: "Final",
    component: () => import("../views/Final.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
