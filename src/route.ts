import { Middleware, registerMiddleware } from 'tarojs-router-next'

export const checkLogin: Middleware<{ requireLogin: boolean }> = async (ctx, next) => {
  console.log('fronz ~ constcheckLogin:Middleware= ~ ctx', ctx.route.ext)
  await next()
  // if (userStore.isLogin) {
  //   await next() // 执行下一个中间件
  // } else {
  //   console.log('please login')
  // }
}

// 注册路由中间件
registerMiddleware(checkLogin)
