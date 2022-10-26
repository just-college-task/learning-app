import Taro from '@tarojs/taro'
import { useUserStore } from '@/store'
import * as userApi from '@/api/user'

const userStore = useUserStore()

export function wechatLogin() {
  if (!userStore.isLogin) {
    Taro.login({
      success(result) {
        const { code } = result
        userApi.wechatLogin({ code }).then(async token => {
          if (!token) return
          console.info('server wechatLogin result', token)
          await Taro.setStorage({ key: 'TOKEN', data: token })
          userStore.setIsLogin(true)
        })
      }
    })
  }
}
