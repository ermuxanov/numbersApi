import { createRouter, createWebHistory } from "vue-router";
import Numbers from "../components/Numbers.vue";
import Result from "../pages/Result.vue";

const routes = [
  { path: "/", component: Numbers },
  { path: "/result", name: "Result", component: Result, props: true },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
