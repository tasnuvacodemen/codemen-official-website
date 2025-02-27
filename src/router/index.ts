import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import OurTeam from '../Pages/team/OurTeam.vue'
import homepage from "../Pages/home/homepage.vue"
import About from "../Pages/about/About.vue"
import ContactUs from "../Pages/contact/ContactUs.vue"

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: homepage
  },
  {
    path: '/ourteam',
    name: 'OurTeam',
    component: OurTeam
  },
  {
    path: '/contact-us',
    name: 'contactUs',
    component: ContactUs
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../components/Pages/aboutus.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

