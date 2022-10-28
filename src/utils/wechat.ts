import Taro from '@tarojs/taro'
import { useUserStore } from '@/store'
import { STORAGE_TOKEN_KEY } from '@/definitions'
import * as userApi from '@/api/user'

const userStore = useUserStore()

export function wechatLogin() {
  if (!userStore.isLogin) {
    Taro.login({
      success(result) {
        const { code } = result
        userApi.wechatLogin({ code }).then(async token => {
          if (!token) return
          // console.info('server wechatLogin result', token)
          await Taro.setStorage({ key: STORAGE_TOKEN_KEY, data: token })

          const userInfo = await userApi.info()
          userStore.setIsLogin(true)
          userStore.nickname = userInfo.nickname
          if (userInfo.avatar) userStore.avatar = userInfo.avatar
        })
      }
    })
  }
}
