import Taro from '@tarojs/taro'
import { useUserStore } from '@/store'
import * as userApi from '@/api/user'

const userStore = useUserStore()

export function wechatLogin() {
  if (!userStore.isLogin) {
    Taro.login({
      success(result) {
        const { code } = result
        userApi.wechatLogin({ code }).then(async res => {
          console.info('server wechatLogin result', res)
          if (res.errMsg === 'request:ok') {
            await Taro.setStorage({ key: 'TOKEN', data: res.data.data })
            userStore.setIsLogin(true)
          }
        })
      }
    })
  }
}
