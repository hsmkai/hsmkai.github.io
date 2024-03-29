import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import WorksView from '../views/WorksView.vue'
import WorkTop from '../views/Works/TopPage.vue'
import MuseumView from '../views/Works/World/MuseumView.vue'
import PrologramView from '../views/Works/World/PrologramView.vue'
import CodeSurvivalView from '../views/Works/World/CodeSurvivalView.vue'
import UseView from '../views/Works/Agreements/UseView.vue'
import GuideLineView from '../views/Works/Agreements/GuidelineView.vue'
import BroadcastView from '../views/Works/Agreements/BroadcastView.vue'
import CutieTrickView from '../views/Works/Others/CutieTrickView.vue'
import ContactView from '../views/ContactView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/works',
    name: 'works',
    component: WorksView,
    children: [
      {
        path: '',
        component: WorkTop
      },
      {
        path: 'museum',
        component: MuseumView,
      },
      {
        path: 'prologram',
        component: PrologramView,
      },
      {
        path: 'code.survival',
        component: CodeSurvivalView,
      },
      {
        path: 'cutie_trick',
        component: CutieTrickView,
      },
      {
        path: 'terms-of-use',
        component: UseView
      },
      {
        path: 'guide',
        component: GuideLineView
      },
      {
        path: 'broadcast',
        component: BroadcastView
      },
    ]
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to) {
    if (to.hash) {
      return { el: to.hash };
    } else {
      return { top: 0 };
    }
  }
})

export default router
