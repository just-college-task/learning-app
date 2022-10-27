import { tabList } from './definitions'

export default defineAppConfig({
  pages: [
    'pages/index/index',
    'pages/courses/index',
    'pages/my/index',
    'pages/my/views/myCourses',
    'pages/my/views/managerCourses',
    'pages/my/views/certificate',
    'pages/my/views/About',
    'pages/course-detail/index',
    'pages/course-content/index',
    'pages/course-content/views/exams/index',
    'pages/section-content/index',
    'pages/course-content/views/exams-result/index'
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
