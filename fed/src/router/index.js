import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: () => import('../views/LoginView.vue'),
    },
    {
      path: '/',
      redirect: '/orders',
    },
    {
      path: '/users',
      name: 'Users',
      component: () => import('../views/UsersView.vue'),
    },
    {
      path: '/orders',
      name: 'Orders',
      component: () => import('../views/OrdersView.vue')
    }
  ],
})

// 路由守卫
router.beforeEach((to, from, next) => {
  // const isAuthenticated = localStorage.getItem('token')
  const isAuthenticated = 1
  if (to.path !== '/login' && !isAuthenticated) {
    next('/login')
  } else {
    next()
  }
})

export default router
