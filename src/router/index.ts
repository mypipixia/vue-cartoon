import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
const routes: Array<RouteRecordRaw> = [
  { path: '/clock', component: () => import('components/date/cartoonClock.vue') },
  { path: '/cartoon-icon-board', component: () => import('components/board/cartoonIconBoard.vue') },
  { path: '/', component: () => import('@/views/test.vue') }
];
const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
