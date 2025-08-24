import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/home',
    component: () => import('@/pages/home/index.vue'),
    meta: {
      title: '首页'
    }
  }
]
export default routes
