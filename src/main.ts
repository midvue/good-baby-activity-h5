import router from '@/router'
import Http, { defaultInterceptors } from '@mid-vue/http-client'
import { createApp } from 'vue'
import App from './App.vue'
import './style'
import { getIsGray, getToken } from './utils/auth'

window.$MidVue = { imgBaseUrl: $CDN_BASE_URL }

Http.init({
  casToken: false,
  baseURL: import.meta.env.DEV ? '/router/rest' : import.meta.env.VITE_BASE_API + '/router/rest',
  token: getToken(),
  interceptors: {
    response: [defaultInterceptors().response],
    request: (config) => {
      config.headers!.isgray = getIsGray()
      return config
    }
  }
})

const app = createApp(App)
app.use(router)
app.mount('#app')

if (import.meta.env.VITE_VCONSOLE === 'true') {
  import('vconsole').then((module) => {
    const Vconsole = module.default
    // 移动端调试工具
    new Vconsole()
  })
}
