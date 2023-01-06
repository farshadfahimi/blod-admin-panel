import type { RouteRecordRaw } from "vue-router";

export const Posts: RouteRecordRaw[] = [
  {
    path: '/posts',
    name: 'posts',
    component: () => import('../views/Posts/index.vue'),
    meta: { title: 'Posts List' }
  },
  {
    path: '/post/create',
    name: 'post-create',
    component: () => import('../views/Posts/Create.vue'),
    meta: { title: 'Create new Post' },
  },
  {
    path: '/post/:id',
    name: 'post',
    component: () => import('../views/Posts/Show.vue'),
    meta: { title: 'specific post content' },
  },
  {
    path: '/post/:id/edit',
    name: 'post-edit',
    component: () => import('../views/Posts/Edit.vue'),
    meta: { title: 'edit page title' }
  },
  {
    path: '/post/:id/auther',
    name: 'post-auther',
    component: () => import ('../views/Auther/Show.vue'),
    meta: { title: 'auther public page' }
  }
]