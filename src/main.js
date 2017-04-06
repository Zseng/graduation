// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import ContentIndex from './components/layout/Content-index'
import ContentCarowner from './components/layout/Content-carowner'
import ContentUser from './components/layout/Content-user'
import ContentCarlist from './components/layout/Content-carlist'
import ContentCarinfo from './components/layout/Content-carinfo'

Vue.use(VueRouter)
/* eslint-disable no-new */

const router = new VueRouter({
  component: App,
  routes: [
    { path: '', component: ContentIndex },
    { path: '/index', component: ContentIndex },
    { path: '/car_owner', component: ContentCarowner },
    { path: '/user/:id', component: ContentUser },
    { path: '/car/:id', component: ContentCarlist },
    { path: '/carinfo', component: ContentCarinfo }
  ]
})

new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router: router
})
