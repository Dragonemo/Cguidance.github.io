import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',

    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }, 
  {
    path: '/conception',
    name: 'conception',
    component: () => import(/* webpackChunkName: "about" */ '../views/ConceptionView.vue')
  },
  {
    path: '/experiment',
    name: 'experiment',
    component: () => import(/* webpackChunkName: "about" */ '../views/ExperimentView.vue')
  },
  {
    path: '/discussion',
    name: 'discussion',
    component: () => import(/* webpackChunkName: "about" */ '../views/DiscussionView.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
