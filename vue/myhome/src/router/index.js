import Vue from 'vue'
import Router from 'vue-router'
import Home from 'components/home/home'
import Market from 'components/market/market'
import mContent from 'components/market/m-content'
import Shopcar from 'components/shopcar/shopcar'
import Usercenter from 'components/user/user'
import Goods from 'components/goods/good'
import deImg from 'components/goods/deImg'
import deKey from 'components/goods/deKey'

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
    },
    {
      path: '/shopcar',
      name: 'shopcar',
      component:Shopcar

    },
    {
      path: '/usercenter',
      name: 'user',
      component:Usercenter

    },
    {
      path: '/goods/:proId',
      name: 'good',
      component:Goods,
      redirect:'/goods/:proId/deimg',
      children:[
      {
        path: 'deimg',
        name: 'img',
        component: deImg
      },
      {
        path: 'dekey',
        name: 'key',
        component: deKey
      }]

    }
  ]
})
