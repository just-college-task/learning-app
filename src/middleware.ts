import { Middleware, registerMiddleware } from 'tarojs-router-next'
import Taro from '@tarojs/taro'
import { STORAGE_TOKEN_KEY } from './definitions'
import { Router } from 'tarojs-router-next'
import { wait } from './utils/helper'

export const checkLogin: Middleware<{ requireLogin: boolean }> = async (ctx, next) => {
  if (ctx.route.ext?.requireLogin) {
    const token = Taro.getStorageSync(STORAGE_TOKEN_KEY)
    if (!token) {
      Router.toLogin()
      await wait(300)
      Taro.showToast({
        title: '请先登录',
        icon: 'error'
      })
      return
    }
  }
  await next()
}

// 注册路由中间件
registerMiddleware(checkLogin)
