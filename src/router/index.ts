import { createRouter, createWebHistory } from 'vue-router'
import { Auth } from './auth'
import HomeView from '../views/HomeView.vue'
import { Posts } from './post'
import { UserRoutes } from './user'
import { CategoriesRoute } from './categories'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    ...Auth,
    ...Posts,
    ...UserRoutes,
    ...CategoriesRoute,
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/contracts',
      name: 'contracts',
      component: () => import('../views/ContractView.vue')
    },
    {
      path: '/vote',
      name: 'vote',
      component: () => import('../views/VoteView.vue')
    },
    {
      path: '/map',
      name: 'map',
      component: () => import('../views/Map.vue')
    },
  ]
})

router.beforeEach((to, _from, next) => {
  if (to.meta && to.meta.title) document.title = to.meta.title

  next()
})

export default router
