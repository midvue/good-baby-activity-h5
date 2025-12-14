import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import { useRouterGuard } from './guard'

const getLocalRoutes = () => {
  const routes = [] as RouteRecordRaw[]
  //自动读取pages下的router.ts文件,并且添加到路由中
  const _modules: Record<string, RouteRecordRaw[]> = import.meta.glob('../pages/**/router.ts', {
    eager: true,
    import: 'default'
  })
  for (const path in _modules) {
    routes.push(..._modules[path])
  }
  return routes
}
const routes = getLocalRoutes()

//自动添加第一个页面为首页
routes.push({
  path: '/',
  redirect: '/home'
})

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(_to, _from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

useRouterGuard(router)

export default router
