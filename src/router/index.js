import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)


export default new Router({
  mode: 'history',
  base: __dirname,
  routes: [{
      path: '/',
      name: 'index',
      component: resolve => require(['views/main/main'], resolve)
    },
    {
      path: '/details',
      name: 'details',
      component: resolve => require(['views/details/details'], resolve),
      meta: {
        scrollToTop: true
      }
    },
    {
      path: '*',
      name: 'page404',
      component: resolve => require(['views/page404.vue'], resolve)
    }

  ]
})
