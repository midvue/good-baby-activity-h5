/// <reference types="vite/client" />

interface ImportMetaEnv {
  /**
   * 后台接口api地址
   */
  readonly VITE_BASE_API: string

  /**
   * 是否开启vConsole
   */
  readonly VITE_VCONSOLE: 'true' | 'false'

  /** 小程序版本 0生产 2体验版 */
  readonly VITE_MINI_APP_TYPE: '0' | '2' | '1'
}
interface ImportMeta {
  readonly env: ImportMetaEnv
}
