import type { RouteRecordRaw } from 'vue-router'

export const CategoriesRoute: RouteRecordRaw[] = [
  {
    path: '/categories',
    name: 'categories',
    component: () => import('../views/Categories/index.vue')
  },
  {
    path: '/categories/:id',
    name: 'category-show',
    component: () => import('../views/Categories/Show.vue')
  },
  {
    path: '/categories/create',
    name: 'categories-create',
    component: () => import('../views/Categories/Create.vue')
  }
]