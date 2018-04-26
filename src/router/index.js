import Vue from 'vue'
import Router from 'vue-router'
import Activity from '@/pages/activity'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Activity
    }
  ]
})
