import { setToken } from '@/utils/auth'
import type { Router } from 'vue-router'

/**
 * 全局路由守卫
 * @param router - 路由实例
 */
export const useRouterGuard = (router: Router) => {
  router.beforeEach(async (to) => {
    let query = to.query as Record<string, string>
    let title = query.title || to.meta.title || '奶娃星球'
    document.title = title

    if (to.query.token) {
      setToken(to.query.token as string)
    }

    if (window.navigator.userAgent.includes('miniProgram')) {
      console.log('是微信环境')

      // 处理微信环境下的路由
      window.wx.miniProgram.postMessage({
        data: {
          title,
          type: 'shareApp',
          shareName: query.shareName,
          coverUrl: to.meta.coverUrl || '',
          fullPath: to.fullPath
        }
      })
    }

    //处理app的navbar,主题
    return true
  })
}
