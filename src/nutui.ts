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
  Input,
  Form,
  FormItem,
  Cell,
  CellGroup,
  Empty,
  ActionSheet,
  TextArea
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
  Input,
  Form,
  FormItem,
  Cell,
  CellGroup,
  Empty,
  ActionSheet,
  TextArea
]

export function useNutUI(app: App) {
  nutuiComponents.forEach(comp => app.use(comp))
}
