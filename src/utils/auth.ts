import Taro from '@tarojs/taro'
import { useUserStore } from '@/store'
import { STORAGE_TOKEN_KEY } from '@/definitions'
import * as userApi from '@/api/user'

const userStore = useUserStore()

export function wechatLogin() {
  return Taro.login({
    success(result) {
      const { code } = result
      userApi.wechatLogin({ code }).then(async token => {
        if (!token) return
        await Taro.setStorage({ key: STORAGE_TOKEN_KEY, data: token })

        const userInfo = await userApi.info()
        userStore.setIsLogin(true)
        userStore.setInfo(userInfo)
      })
    }
  })
}

export function logout() {
  Taro.removeStorageSync(STORAGE_TOKEN_KEY)
  userStore.clearUser()
  Taro.showToast({
    title: '注销登录成功',
    icon: 'success'
  })
}
