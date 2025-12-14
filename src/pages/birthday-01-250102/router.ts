import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/birthday-01-250102',
    component: () => import('@/pages/birthday-01-250102/index.vue'),
    meta: {
      title: '周岁邀请函'
    }
  }
]
export default routes
