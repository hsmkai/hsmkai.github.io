import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import WorksView from '../views/WorksView.vue'
import PrologramView from '../views/Works/World/PrologramView.vue'
import CodeSurvivalView from '../views/Works/World/CodeSurvivalView.vue'
import ContactView from '../views/ContactView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/works',
    name: 'works',
    component: WorksView
  },
  {
    path: '/works/prologram',
    name: 'prologram',
    component: PrologramView
  },
  {
    path: '/works/code.survival',
    name: 'code.survival',
    component: CodeSurvivalView
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
