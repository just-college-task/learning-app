import { App } from 'vue'
import {
  Button,
  Toast,
  Tabbar,
  TabbarItem,
  Icon,
  Swiper,
  SwiperItem,
  Avatar,
  Progress,
  Tabs,
  TabPane,
  Divider,
  Tag,
  Sticky
} from '@nutui/nutui-taro'

const nutuiComponents = [
  Button,
  Toast,
  Tabbar,
  TabbarItem,
  Icon,
  Swiper,
  SwiperItem,
  Avatar,
  Progress,
  Tabs,
  TabPane,
  Divider,
  Tag,
  Sticky
]

export function useNutUI(app: App) {
  nutuiComponents.forEach(comp => app.use(comp))
}
