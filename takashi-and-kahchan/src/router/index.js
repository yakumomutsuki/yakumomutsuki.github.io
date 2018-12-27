import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import TimeTravel from '@/components/contents/TimeTravel'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/contents/TimeTravel',
      name: 'TimeTravel',
      component: TimeTravel
    }
  ]
})
