import { createWebHistory, createRouter } from "vue-router";
import Dashboard from "./views/Dashboard/Dashboard.vue";
import Explore from "./views/Explore/Explore.vue";
import Mylocker from "./views/Mylocker/Mylocker.vue";
import Liquiditylocker from "./views/Liquiditylocker/Mylocker.vue";
import Mylocks from "./views/Mylocks/Mylocks.vue";
import Explorecard from "./views/Explorecard/Explorecard.vue";



const routes = [
  {
    path: "/explore",
    name: "Explore",
    component: Explore,
  },
  {
    path: "/",
    name: "Dashboard",
    component: Dashboard,
  },
  {
    path: "/explorecard",
    name: "Explorecard",
    component: Explorecard,
  },
  {
    path: "/tokenlocker",
    name: "Mylocker",
    component: Mylocker,
  },
  {
    path: "/liquiditylocker",
    name: "Liquiditylocker",
    component: Liquiditylocker,
  },
  {
    path: "/mylocks",
    name: "Mylocks",
    component: Mylocks,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
