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
  Badge,
  Progress,
  Tabs,
  TabPane,
  Divider,
  Tag,
  Radio,
  RadioGroup,
  Sticky,
  Skeleton,
  Grid,
  GridItem,
  Popup,
  OverLay,
  Uploader,
  Form,
  FormItem,
  Cell,
  CellGroup
} from '@nutui/nutui-taro'

const nutuiComponents = [
  Button,
  Badge,
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
  Skeleton,
  Grid,
  GridItem,
  Popup,
  OverLay,
  Uploader,
  Form,
  FormItem,
  Cell,
  CellGroup
]

export function useNutUI(app: App) {
  nutuiComponents.forEach(comp => app.use(comp))
}
