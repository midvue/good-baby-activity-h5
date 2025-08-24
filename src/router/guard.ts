import { setToken } from '@/utils/auth'
import type { Router } from 'vue-router'

/**
 * 全局路由守卫
 * @param router - 路由实例
 */
export const useRouterGuard = (router: Router) => {
  router.beforeEach(async (to) => {
    document.title = to.meta.title || '奶娃星球'

    if (to.query.token) {
      setToken(to.query.token as string)
    }

    //处理app的navbar,主题
    return true
  })
}
