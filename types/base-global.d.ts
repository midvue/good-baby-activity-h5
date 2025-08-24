declare global {
  interface Window {
    __isProd__: boolean
    $MidVue: {
      /** 图片的baseUrl */
      imgBaseUrl: string
      http?: <T = any>(url: string, appkey: number | string, data: any, config = {}) => Promise<T>
    }
  }

  type valueof<T> = T[keyof T]
  /** CDN的基础地址 */
  var $CDN_BASE_URL: string
}
export {}
