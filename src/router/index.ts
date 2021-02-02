import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
const routes: Array<RouteRecordRaw> = [
  { path: '/clock', component: () => import('components/date/cartoonClock.vue') },
  { path: '/', component: () => import('@/views/test.vue') }
];
const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
