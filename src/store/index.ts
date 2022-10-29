import { defineStore } from 'pinia'
import { ref } from 'vue'
import { tabs } from '@/definitions'
import Taro from '@tarojs/taro'
import { User } from 'types/api'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  function increment() {
    count.value++
  }

  return { count, increment }
})

export const useTabStore = defineStore('tab', (initialPagePath?: string) => {
  const activePath = ref(initialPagePath ?? tabs[0].pagePath)

  function switchTab(path: string) {
    activePath.value = path
    Taro.switchTab({ url: `/${path}` })
  }

  return {
    activePath,
    switchTab
  }
})

//userStore
export const useUserStore = defineStore('user', () => {
  const nickname = ref('')
  const avatar = ref('')
  const isLogin = ref(false)
  const info = ref<User>()

  function setIsLogin(value: boolean) {
    isLogin.value = value
  }

  function setInfo(value: User) {
    info.value = value
  }

  function clearUser() {
    nickname.value = ''
    avatar.value = ''
    isLogin.value = false
  }

  return {
    info,
    setInfo,
    nickname,
    isLogin,
    avatar,
    setIsLogin,
    clearUser
  }
})
