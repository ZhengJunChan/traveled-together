import Vue from 'vue'
import Router from 'vue-router'
import Activity from '@/pages/activity'
import ActivityDetail from '@/pages/activity/detail.vue'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '*',
    redirect: '/'
  }, {
    path: '/',
    component: Activity
  }, {
    path: '/detail',
    component: ActivityDetail
  }]
})
