import Vue from 'vue'
import Router from 'vue-router'
import Loading from '@/components/loading/Loading'
import MapView from '@/components/mapView/MapView'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'loading',
      component: Loading
    },
    {
      path: '/map',
      name: 'map',
      component: MapView
    }
  ]
})
