import 'vue-router'

declare global {
  interface IStatusBar {
    /**
     * 主题色 0:黑色 1:白色
     */
    theme?: '0' | '1'
    /**
     * 状态栏字体色 1:黑色 0:白色
     */
    color?: string
    /**
     * 背景色
     */
    bgColor?: string
  }
}

declare module 'vue-router' {
  interface RouteMeta {
    auth?: boolean
    title?: string
    icon?: string
    transparentHead?: boolean
    statusBar?: IStatusBar
    isFullScreen?: boolean
  }
}

export {}
