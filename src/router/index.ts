import { createRouter, createWebHistory } from 'vue-router'
import privateRoutes from './privateRoutes'
import {useAuthStore} from '@/stores/auth'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: () => import('../views/LoginView.vue'),
      meta: {
        authReq: false
      }
    },
    {
      path: '/mainLayout',
      name: 'mainLayout',
      redirect: '/',
      component: () => import('../views/LayoutView.vue'),
      meta: {
        authReq: true
      },
      children: privateRoutes
    },
  ]
})

router.beforeEach(async (to, from, next) => {
  const authStore = useAuthStore();
  console.log('authstore ', authStore)

  if(authStore.authenticated && authStore.isLoggedIn()) {
    next('/mainLayout');
  }
  next('/login');
})

export default router
