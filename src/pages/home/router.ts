import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/home',
    component: () => import('@/pages/home/index.vue'),
    meta: {
      title: '厉氏宗祠竣工庆典邀请函'
    }
  }
]
export default routes
