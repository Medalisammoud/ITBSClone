import { createRouter, createWebHashHistory } from "vue-router";
import Home from "./components/pages/Home.vue";
import ITBS from "./components/pages/ITBS.vue";
import Stage from './components/pages/Stage.vue';
import Prep from './components/pages/Prep.vue';

const routes = [
  { path: "/", component: Home },
  { path: "/notre-ecole", component: ITBS },
  { path: "/stage", component: Stage },
  { path: "/preparatoire", component: Prep }
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
