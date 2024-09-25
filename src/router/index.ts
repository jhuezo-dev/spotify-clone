import { createRouter, createWebHistory } from 'vue-router'
// import PrivateRoutes from './privateRoutes'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/mainLayout'
    },
    {
      path: '/mainLayout',
      redirect: '/home',
      name: 'mainLayout',
      component: () => import('../views/LayoutView.vue'),
      meta: {
        authReq: true
      },
      children: [
        {
          path: '/home',
          name: 'home',
          component: () => import('../views/HomeView.vue')
        },
        {
          path: '/search',
          name: 'search',
          component: () => import('../views/SearchView.vue')
        },
      ]
    },
  ]
})

export default router
