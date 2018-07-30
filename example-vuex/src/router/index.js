import Vue from 'vue'
import Router from 'vue-router'
import SeatMap from '@/pages/SeatMap'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'SeatMap',
      component: SeatMap
    }
  ]
})
