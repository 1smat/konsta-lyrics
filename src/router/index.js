import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Santa from '@/views/Santa.vue'
import ChekishOldiradi from '../views/ChekishOldiradi.vue'
import Uchaman from '@/views/Uchaman.vue'
import Mojizalar from '@/views/Mojizalar.vue'
import Qayiq from '@/views/Qayiq.vue'
import Jinnixona from '@/views/Jinnixona.vue'
import Layli from '@/views/Layli.vue'
import Izladim from '@/views/Izladim.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/santa',
    name: 'santa',
    component: Santa,
  },
  {
    path: '/chekisholdiradi',
    name: 'chekisholdiradi',
    component: ChekishOldiradi,
  },
  {
    path: '/uchaman',
    name: 'uchaman',
    component: Uchaman,
  },
  {
    path: '/mojizalar',
    name: 'mojizalar',
    component: Mojizalar,
  },
  {
    path: '/qayiq',
    name: 'qayiq',
    component: Qayiq,
  },
  {
    path: '/jinnixona',
    name: 'jinnixona',
    component: Jinnixona,
  },
  {
    path: '/layli',
    name: 'layli',
    component: Layli,
  },
  {
    path: '/izladim',
    name: 'izladim',
    component: Izladim,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
