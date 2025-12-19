import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/birthday-01-250102',
    component: () => import('@/pages/birthday-01-250102/index.vue'),
    meta: {
      title: '周岁邀请函',
      coverUrl: `${$CDN_BASE_URL}/birthday-01-250102/img_share_app.jpg`
    }
  }
]
export default routes
