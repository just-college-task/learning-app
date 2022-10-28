import { tabList } from './definitions'

export default defineAppConfig({
  pages: [
    'pages/index/index',
    'pages/courses/index',
    'pages/my/index',
    'pages/login/index',
    'pages/my-courses/index',
    'pages/my-manage-courses/index',
    'pages/my-certificates/index',
    'pages/course-detail/index',
    'pages/course-content/index',
    'pages/test-result/index',
    'pages/testing/index',
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
