import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/birthday-80-241228',
    component: () => import('@/pages/birthday-80-241228/index.vue'),
    meta: {
      title: '80周岁庆典邀请函'
    }
  }
]
export default routes
