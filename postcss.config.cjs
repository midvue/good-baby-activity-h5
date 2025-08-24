module.exports = {
  plugins: {
    autoprefixer: {
      overrideBrowserslist: [
        'Chrome > 60',
        'last 2 versions' // 所有主流浏览器最近2个版本
      ]
    },
    'postcss-px-to-viewport-8-plugin': {
      unitToConvert: 'px', // 需要转换的单位，默认为"px"
      viewportWidth: 375, // 设计稿的视口宽度
      unitPrecision: 6, // 单位转换后保留的精度
      propList: ['*'], // 能转化为vw的属性列表
      viewportUnit: 'vw', // 希望使用的视口单位
      fontViewportUnit: 'vw', // 字体使用的视口单位
      selectorBlackList: ['ignore-'], // 指定不转换为视窗单位的类名，
      minPixelValue: 1, // 设置最小的转换数值，如果为1的话，只有大于1的值会被转换
      mediaQuery: true, // 媒体查询里的单位是否需要转换单位
      replace: true, //  是否直接更换属性值，而不添加备用属性
      landscape: false // 是否添加根据 landscapeWidth 生成的媒体查询条件 @media (orientation: landscape)
    }
  }
}
