import { tabList } from './definitions'

export default defineAppConfig({
  pages: [
    'pages/loading/index',
    'pages/index/index',
    'pages/courses/index',
    'pages/my/index',
    'pages/login/index',
    'pages/register/index',
    'pages/about/index',
    'pages/my-courses/index',
    'pages/my-manage-courses/index',
    'pages/my-certificates/index',
    'pages/my-profile/index',
    'pages/course-detail/index',
    'pages/course-all/index',
    'pages/course-content/index',
    'pages/test-result/index',
    'pages/testing/index',
    'pages/section-content/index',
    'pages/create-announcement/index',
    'pages/new-course/index'
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
