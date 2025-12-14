import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/birthday-80-241228',
    component: () => import('@/pages/birthday-80-241228/index.vue'),
    meta: {
      title: '八十岁大寿邀请函',
      coverUrl: `${$CDN_BASE_URL}/birthday-80-241228/img_share_app.jpg`
    }
  }
]
export default routes
