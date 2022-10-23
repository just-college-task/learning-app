import { tabList } from './definitions'

export default defineAppConfig({
  pages: [
    'pages/index/index',
    'pages/courses/index',
    'pages/my/index',
    'pages/my/login',
    'pages/my/register',
    'pages/course-detail/index',
    'pages/course-content/index',
    'pages/section-content/index'
  ],
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
    list: tabList
  }
})
