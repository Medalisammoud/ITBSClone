import { createRouter, createWebHashHistory } from "vue-router";
import Home from "./components/pages/Home.vue";
import ITBS from "./components/pages/ITBS.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/about", component: ITBS },
];
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.afterEach((to, from) => {
  console.log(from, to);
  document.title = to.meta.title;
});
export default router;
