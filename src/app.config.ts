export default defineAppConfig({
  pages: ['pages/index/index', 'pages/courses/index', 'pages/my/index'],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    custom: true,
    color: '#000000',
    selectedColor: '#DC143C',
    backgroundColor: '#ffffff',
    list: [
      {
        pagePath: 'pages/index/index',
        text: '首页'
      },
      {
        pagePath: 'pages/courses/index',
        text: '课程'
      },
      {
        pagePath: 'pages/my/index',
        text: '我的'
      }
    ]
  }
})
