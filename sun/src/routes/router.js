import Vue from 'vue'
import Router from 'vue-router'
import Home from "../components/Home.vue"
import Dashboard from "../components/Dashboard.vue"
import NotFound from "../components/404.vue"
import AnimalDetail from "../components/AnimalDetail.vue"

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/dashboard/:animal_type',
      name: 'animal_type',
      component : AnimalDetail
    },
    {
      path: '*',
      component: NotFound
    }
  ]
})

export default router
