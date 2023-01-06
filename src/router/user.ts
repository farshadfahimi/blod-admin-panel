import type { RouteRecordRaw } from "vue-router";

export const UserRoutes: RouteRecordRaw[] = [
  {
    path: '/user/:id',
    name: 'user-profile',
    component: () => import('@/views/Auther/Show.vue')
  }
]