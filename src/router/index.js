import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/views/layout/Layout'

/* Router Modules */
// import chartsRouter from './modules/charts'

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
    path: '/three',
    component: () => import('@/views/login/three'),
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
    path: '/allArea',
    component: Layout,
    meta: { title: 'allArea', icon: 'peoples', noCache: true },
    children: [
      {
        path: 'PassengerFlowAnalysis', // 客流
        component: () => import('@/views/PassengerFlowAnalysis'),
        name: 'PassengerFlowAnalysis',
        meta: { title: 'PassengerFlowAnalysis', noCache: true }
      },
      {
        path: 'consumption', // 消费
        component: () => import('@/views/consumption/index'),
        name: 'consumption',
        meta: { title: 'consumption', noCache: true }
      },
      {
        path: 'portraitTourist', // 游客画像
        component: () => import('@/views/portraitTourist/index'),
        name: 'portraitTourist',
        meta: { title: 'portraitTourist', noCache: true }
      },
      {
        path: 'relation', // 关联度分析
        component: () => import('@/views/relation/index'),
        name: 'relation',
        meta: { title: 'relation', noCache: true }
      },
      {
        path: 'ss', // 实时交通
        component: () => import('@/views/traffic/components/ss'),
        name: 'ss',
        meta: { title: 'ss', noCache: true }
      }
    ]
  },
  {
    path: '/forecast', // 重点景区
    component: Layout,
    meta: { title: 'forecast', icon: 'example', noCache: true },
    children: [
      {
        path: 'dfs', // 大佛寺
        // component: () => import('@/views/forecast/components/dfs'), //修改前
        component: () => import('@/views/forecast/dfs'), // 修改后
        name: 'dfs',
        meta: { title: 'dfs', noCache: true }
      },
      {
        path: 'sjf', // 十九峰
        // component: () => import('@/views/forecast/components/sjf'), //修改前
        component: () => import('@/views/forecast/sjf'), // 修改后
        name: 'sjf',
        meta: { title: 'sjf', noCache: true }
      },
      {
        path: 'specialHoliday', // 特殊假日
        // component: () => import('@/views/specialHoliday/index'), // 修改前
        component: () => import('@/views/forecast/specialHoliday'), // 修改后
        name: 'specialHoliday',
        meta: { title: 'specialHoliday', noCache: true }
      }
    ]
  },
  {
    path: '/ruralTourism', // 乡村旅游
    component: Layout,
    redirect: '/ruralTourism/index',
    children: [
      {
        path: 'index',
        component: () => import('@/views/ruralTourism/index'),
        name: 'ruralTourism',
        meta: { title: 'ruralTourism', icon: 'chart', noCache: true }
      }
    ]
  },
  {
    path: '/publicSentiment', // 舆情
    component: Layout,
    redirect: '/publicSentiment/index/jiudian',
    meta: { title: 'publicSentiment', icon: 'message', noCache: true },
    children: [
      {
        path: 'index',
        component: () => import('@/views/publicSentiment/index'),
        name: 'publicSentiment',
        hidden: true,
        children: [
          {
            path: 'jiudian',
            component: () => import('@/views/publicSentiment/components/jiudian'),
            name: 'jiudian',
            hidden: true
          },
          {
            path: 'jingqu',
            component: () => import('@/views/publicSentiment/components/jingqu'),
            name: 'jingqu',
            hidden: true
          }
        ]
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
    path: '/InteractivePlatform', // 互动平台
    component: Layout,
    redirect: '/InteractivePlatform/index',
    children: [
      {
        path: 'index',
        component: () => import('@/views/InteractivePlatform/newIndex'),
        name: 'InteractivePlatform',
        meta: { title: 'InteractivePlatform', icon: 'drag', noCache: true }
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
  },
  {
    path: '/documentation', // 应急预警
    component: Layout,
    redirect: '/documentation/index',
    meta: { title: 'documentation', icon: 'documentation', noCache: true },
    children: [
      {
        path: 'doc',
        component: () => import('@/views/documentation/index'),
        name: 'doc',
        meta: { title: 'doc' }
      },
      {
        path: 'setup',
        component: () => import('@/views/documentation/SetUp'),
        name: 'setup',
        meta: { title: 'setup' }
      },
      // {
      //   path: 'manage',
      //   component: () => import('@/views/documentation/manage'),
      //   name: 'manage',
      //   meta: { title: 'manage' }
      // },
      {
        path: 'statistics',
        component: () => import('@/views/documentation/Statistics'),
        name: 'statistics',
        meta: { title: 'statistics' }
      },
      {
        path: 'addPoint',
        component: () => import('@/views/documentation/components/addPoint'),
        name: 'addPoint',
        meta: { title: 'addPoint' },
        hidden: true
      },
      {
        path: 'addWarn',
        component: () => import('@/views/documentation/components/addWarn'),
        name: 'addWarn',
        meta: { title: 'addWarn' },
        hidden: true
      }
    ]
  }
]

export default new Router({
  // mode: 'hash', // require service support
  scrollBehavior: () => ({ y: 0 }),
  // base: '/xinchang/',
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
