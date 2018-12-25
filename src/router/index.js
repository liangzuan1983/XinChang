import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/views/layout/Layout'

/* Router Modules */
import chartsRouter from './modules/charts'

/** note: Submenu only appear when children.length>=1
 *  detail see  https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 **/

/**
* hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
* alwaysShow: true               if set true, will always show the root menu, whatever its child routes length
*                                if not set alwaysShow, only more than one route under the children
*                                it will becomes nested mode, otherwise not show the root menu
* redirect: noredirect           if `redirect:noredirect` will no redirect in the breadcrumb
* name:'router-name'             the name is used by <keep-alive> (must set!!!)
* meta : {
    roles: ['admin','editor']     will control the page roles (you can set multiple roles)
    title: 'title'               the name show in submenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar,
    noCache: true                if true ,the page will no be cached(default is false)
  }
**/
export const constantRouterMap = [
  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path*',
        component: () => import('@/views/redirect/index')
      }
    ]
  },
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/auth-redirect',
    component: () => import('@/views/login/authredirect'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@/views/errorPage/404'),
    hidden: true
  },
  {
    path: '/401',
    component: () => import('@/views/errorPage/401'),
    hidden: true
  },
  {
    path: '',
    component: Layout,
    redirect: 'dashboard',
    children: [
      {
        path: 'dashboard',
        component: () => import('@/views/dashboard/index'),
        name: 'Dashboard',
        meta: { title: 'dashboard', icon: 'dashboard', noCache: true }
      }
    ]
  },
  {
    path: '/PassengerFlowAnalysis', // 客流分析
    component: Layout,
    redirect: '/PassengerFlowAnalysis/index',
    children: [
      {
        path: 'index',
        component: () => import('@/views/PassengerFlowAnalysis'),
        name: 'PassengerFlowAnalysis',
        meta: { title: 'PassengerFlowAnalysis', icon: 'peoples', noCache: true }
      }
    ]
  },
  {
    path: '/traffic', // 交通
    component: Layout,
    redirect: '/traffic/index/ss',
    meta: { title: 'traffic', icon: 'guide', noCache: true },
    children: [
      {
        path: 'index',
        component: () => import('@/views/traffic/index'),
        name: 'traffic',
        hidden: true,
        children: [
          {
            path: 'ss',
            component: () => import('@/views/traffic/components/ss'),
            name: 'ss',
            hidden: true
          },
          {
            path: 'sj',
            component: () => import('@/views/traffic/components/sj'),
            name: 'sj',
            hidden: true
          }
        ]
      }
    ]
  },
  // {
  //   path: '/forecast', // 预测
  //   component: Layout,
  //   redirect: '/forecast/index',
  //   children: [
  //     {
  //       path: 'index',
  //       component: () => import('@/views/forecast/index'),
  //       name: 'forecast',
  //       meta: { title: 'forecast', icon: 'example', noCache: true }
  //     }
  //   ]
  // },
  {
    path: '/consumption', // 消费
    component: Layout,
    redirect: '/consumption/index',
    children: [
      {
        path: 'index',
        component: () => import('@/views/consumption/index'),
        name: 'consumption',
        meta: { title: 'consumption', icon: 'money', noCache: true }
      }
    ]
  },
  {
    path: '/publicSentiment', // 舆情
    component: Layout,
    redirect: '/publicSentiment/index',
    children: [
      {
        path: 'index',
        component: () => import('@/views/publicSentiment/index'),
        name: 'publicSentiment',
        meta: { title: 'publicSentiment', icon: 'message', noCache: true }
      }
    ]
  },
  {
    path: '/complaint', // 投诉
    component: Layout,
    redirect: '/complaint/index',
    children: [
      {
        path: 'index',
        component: () => import('@/views/complaint/index'),
        name: 'complaint',
        meta: { title: 'complaint', icon: 'clipboard', noCache: true }
      }
    ]
  },
  {
    path: '/specialHoliday', // 特殊假日
    component: Layout,
    redirect: '/specialHoliday/index',
    children: [
      {
        path: 'index',
        component: () => import('@/views/specialHoliday/index'),
        name: 'specialHoliday',
        meta: { title: 'specialHoliday', icon: 'star', noCache: true }
      }
    ]
  },
  {
    path: '/portraitTourist', // 游客画像
    component: Layout,
    redirect: '/portraitTourist/index',
    children: [
      {
        path: 'index',
        component: () => import('@/views/portraitTourist/index'),
        name: 'portraitTourist',
        meta: { title: 'portraitTourist', icon: 'people', noCache: true }
      }
    ]
  },
  {
    path: '/economicalOperation', // 经济运行
    component: Layout,
    redirect: '/economicalOperation/index',
    children: [
      {
        path: 'index',
        component: () => import('@/views/economicalOperation/index'),
        name: 'economicalOperation',
        meta: { title: 'economicalOperation', icon: 'chart', noCache: true }
      }
    ]
  },
  {
    path: '/weatherEnvironment', // 资源分布
    component: Layout,
    redirect: '/weatherEnvironment/index',
    children: [
      {
        path: 'index',
        component: () => import('@/views/weatherEnvironment/index'),
        name: 'weatherEnvironment',
        meta: { title: 'weatherEnvironment', icon: 'bug', noCache: true }
      }
    ]
  }
  // {
  //   path: '/documentation',
  //   component: Layout,
  //   redirect: '/documentation/index',
  //   children: [
  //     {
  //       path: 'index',
  //       component: () => import('@/views/documentation/index'),
  //       name: 'Documentation',
  //       meta: { title: 'documentation', icon: 'documentation', noCache: true }
  //     }
  //   ]
  // }
]

export default new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})

export const asyncRouterMap = [
  // {
  //   path: '/icon',
  //   component: Layout,
  //   children: [
  //     {
  //       path: 'index',
  //       component: () => import('@/views/svg-icons/index'),
  //       name: 'Icons',
  //       meta: { title: 'icons', icon: 'icon', noCache: true }
  //     }
  //   ]
  // },

  /** When your routing table is too long, you can split it into small modules**/
  // chartsRouter,

  { path: '*', redirect: '/404', hidden: true }
]
