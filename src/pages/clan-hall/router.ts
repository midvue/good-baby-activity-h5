import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/clan-hall',
    component: () => import('@/pages/clan-hall/index.vue'),
    meta: {
      title: '厉氏宗祠竣工庆典邀请函'
    }
  }
]
export default routes
