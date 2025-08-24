/** 隐藏启动屏加载  */
export function hideHtmlLoading() {
  // 图片加载完成后执行的代码
  const loadingDom = document.getElementById('vts-global-page')
  if (loadingDom) {
    loadingDom.style.display = 'none'
  }
}
