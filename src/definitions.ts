import { TabBar } from '@tarojs/taro'
import { PageParams } from 'types/api'

interface Tab {
  text: string
  iconName: string
  pagePath: string
}

export const tabs: Tab[] = [
  {
    pagePath: 'pages/index/index',
    text: '首页',
    iconName: 'home'
  },
  {
    pagePath: 'pages/courses/index',
    text: '课程',
    iconName: 'category'
  },
  {
    pagePath: 'pages/my/index',
    text: '我的',
    iconName: 'my'
  }
]

export const tabList: TabBar['list'] = tabs.map(tab => ({
  pagePath: tab.pagePath,
  text: tab.text
}))
