import Taro from '@tarojs/taro'
import { Middleware, registerMiddlewares } from 'tarojs-router-next'
import { useUserStore } from '@/store'

const userStore = useUserStore()

export const checkLogin: Middleware = async (_, next) => {
  if (userStore.isLogin) {
    await next() // 执行下一个中间件
  } else {
    console.log('please login')
  }
}

// 注册路由中间件
registerMiddlewares([checkLogin])
