import Vue from 'vue'
import Router from 'vue-router'
import Home from 'components/home/home'
import Market from 'components/market/market'
import mContent from 'components/market/m-content'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/market',
      name: 'market',
      component: Market,
      redirect:'/market/content?type=1',
      children:[
      {
        path: 'content',
        name: 'content',
        component: mContent,
      }]
    }
  ]
})
