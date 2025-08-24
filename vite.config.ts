import { defineConfig, loadEnv } from 'vite'
import { viteConfig } from '@mid-vue/vite-config'
import type { ConfigEnv } from 'vite'
export default ({ mode }: ConfigEnv) => {
  const env = loadEnv(mode, './env')

  const cdnUrl = 'https://cos-app.xfy-66.com/good-baby-activity-h5/'
  const config = viteConfig({
    mode,
    envDir: './env',
    assetsInclude: ['svga'],

    define: {
      $CDN_BASE_URL: JSON.stringify(cdnUrl)
    },
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler',
          additionalData: `$CDN_BASE_URL: '${cdnUrl}';`
        }
      }
    },
    server: {
      port: +env.VITE_PORT,
      proxy: {
        '/api': {
          target: env.VITE_BASE_API,
          changeOrigin: true,
          ws: true,
          bypass(req) {
            console.log('token', req.headers.token)
          }
        }
      }
    }
  })
  return defineConfig(config)
}
