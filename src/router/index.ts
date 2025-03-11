import { createRouter, createWebHistory } from 'vue-router'
import RegisterView from '@/views/RegisterView.vue'
import RolsView from '@/views/RolsView.vue'
import UserView from '@/views/UserView.vue'
import MainLayout from '@/components/layout/MainLayout.vue'
import { useAuthStore } from '@/stores/auth'
import LoginView from '@/views/LoginView.vue'
import BookView from '@/views/BookView.vue'
import AdminView from '@/views/Admin/AdminView.vue'
import AdminLayout from '@/components/layout/AdminLayout.vue'
import TableUsersView from '@/views/Admin/TableUsersView.vue'
import TableBook from '@/views/Admin/TableBook.vue'
import AddBook from '@/views/Admin/AddBook.vue'

const routes = [
  {
    path: '',
    component: MainLayout,
    children: [
      {
        path: '/inicio',
        name: 'inicio',
        component: UserView,
      },
      {
        path: '/libro',
        name: 'libro',
        component: BookView,
      },
    ],
  },
  {
    path: '/admin',
    component: AdminLayout,
    children: [
      {
        path: '',
        name: 'admin',
        component: AdminView,
      },
      {
        path: '/usuarios',
        name: 'usuarios',
        component: TableUsersView,
      },
      {
        path: '/libros',
        name: 'libros',
        component: TableBook,
      },
    ],
  },
  {
    path:'/addBook',
    name:'addBook',
    component: AddBook
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
  const authStore = useAuthStore()
  const isLoggedIn = authStore.isLoggedIn

  if (to.meta.requiresAuth && !isLoggedIn) {
    next('/login')
  } else if ((to.path === '/login' || to.path === '/registro') && isLoggedIn) {
    next('/dashboard')
  } else {
    next()
  }
})

export default router