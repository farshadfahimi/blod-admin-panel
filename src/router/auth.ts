import type { RouteRecordRaw } from 'vue-router';

export const Auth: RouteRecordRaw[] = [
  {
    path: '/signin',
    name: 'signin',
    component: () => import('../views/Signin.vue'),
    meta: { title: 'Signin Page' }
  },
  {
    path: '/signup',
    name: 'signup',
    component: () => import('../views/Signup.vue'),
    meta: { title: 'Signup Page' }
  },
]