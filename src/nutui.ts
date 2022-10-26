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
  Radio,
  RadioGroup,
  Sticky,
  Skeleton
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
  Radio,
  RadioGroup,
  Sticky,
  Skeleton
]

export function useNutUI(app: App) {
  nutuiComponents.forEach(comp => app.use(comp))
}
