import { createRouter, createWebHistory } from 'vue-router'
import RegisterView from '@/views/RegisterView.vue'
import RolsView from '@/views/rolsView.vue'
import UserView from '@/views/UserView.vue'
import MainLayout from '@/components/layout/MainLayout.vue'
import { useAuthStore } from '@/stores/auth'
import LoginView from '@/views/LoginView.vue'

const  routes = [
    {
      path: '',
      name: '',
      component: MainLayout,
      children: [
        {
          path: '/inicio',
          name: 'inicio',
          component: UserView,
        },
      ],
    },
    {
      path: '/registro',
      name: 'registro',
      component: RegisterView,
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
    },
    {
      path: '/roles',
      name: 'roles',
      component: RolsView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
  ]


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

router.beforeEach((to, from, next) => {

const authStore=useAuthStore()
const isLoggedIn=authStore.isLoggedIn

if (to.meta.requiresAuth && !isLoggedIn) {
  next('/login')
} else if ((to.path === '/login' || to.path === '/register') && isLoggedIn) {
  next('/dashboard')
} else {
  next()
}
})



export default router
