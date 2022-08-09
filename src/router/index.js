import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  { path: "/Home", name: "Home", component: () => import("../views/Home.vue") },
  { path: "/About", name: "About", component: () => import("../views/About.vue"),},
  { path: "/Contact", name: "Contact", component: () => import("../views/Contact.vue"),},
  { path: "/Work", name: "Work", component: () => import("../views/Work.vue"),},
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
