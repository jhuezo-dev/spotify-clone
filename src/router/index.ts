import { createRouter, createWebHistory } from 'vue-router'
// import PrivateRoutes from './privateRoutes'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/mainLayout',
      redirect: '/',
      name: 'mainLayout',
      component: () => import('../views/LayoutView.vue'),
      meta: {
        authReq: true
      },
      children: [
        {
          path: '/',
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
