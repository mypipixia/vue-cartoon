import { createRouter, createWebHashHistory, RouteRecordRaw, Router, RouterOptions } from "vue-router";
const routes: Array<RouteRecordRaw> = [
  {
    path: "/clock",
    component: () => import("components/date/cartoonClock.vue")
  },
  {
    path: "/cartoon-icon-board",
    component: () => import("components/board/cartoonIconBoard.vue")
  },
  { path: "/", component: () => import("@/views/layout/entry.vue") }
];

const createRouters = (options: RouterOptions): Router => {
  return createRouter(options)
}

const router = createRouters({
  history: createWebHashHistory(),
  routes
})

export default router;
