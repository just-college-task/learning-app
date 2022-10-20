import { createApp } from 'vue'
import {
  Button,
  Toast,
  Tabbar,
  TabbarItem,
  Icon,
  Swiper,
  SwiperItem,
  Avatar,
  Progress
} from '@nutui/nutui-taro'
import { createPinia } from 'pinia'

const nutuiComponents = [
  Button,
  Toast,
  Tabbar,
  TabbarItem,
  Icon,
  Swiper,
  SwiperItem,
  Avatar,
  Progress
]

import './app.scss'

const App = createApp({
  onShow(options) {}
  // 入口组件不需要实现 render 方法，即使实现了也会被 taro 所覆盖
})

App.use(createPinia())

nutuiComponents.forEach(comp => App.use(comp))

export default App
