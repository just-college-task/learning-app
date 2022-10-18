import { TabBar } from '@tarojs/taro'

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
    pagePath: 'pages/my/index',
    text: '我的',
    iconName: 'my'
  }
]

export const tabList: TabBar['list'] = tabs.map(tab => ({
  pagePath: tab.pagePath,
  text: tab.text
}))
