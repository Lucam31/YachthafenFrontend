import { createRouter, createWebHistory } from 'vue-router'
import SuchenView from '../views/SuchenView.vue'
import BuchenView from '../views/BuchenView.vue'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import ProfileView from '../views/ProfileView.vue'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'login',
    component: LoginView
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterView
  },
  {
    path: '/suchen',
    name: 'suchen',
    component: SuchenView
  },
  {
    path: '/buchen',
    name: 'buchen',
    component: BuchenView 
  },
  {
    path: '/profile',
    name: 'profile',
    component: ProfileView
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
