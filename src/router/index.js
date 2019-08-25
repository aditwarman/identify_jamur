import Vue from 'vue'
// import store from '@/store'
import Router from 'vue-router'
import Home from '@/components/Home'
import Identifikasi from '@/components/Identifikasi'
Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/identifikasi',
      name: 'identifikasi',
      component: Identifikasi
    }
  ]
})

router.beforeEach((to, from, next) => {
//   next(
//     (to.meta.guarded && store.state.token === '') ? {name: 'login'} : true
//   )
    next(true)
})

export default router