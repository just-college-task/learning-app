import { defineStore } from 'pinia'
import { ref } from 'vue'
import { tabs } from '@/definitions'
import * as userApi from '@/api/user'
import Taro from '@tarojs/taro'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  function increment() {
    count.value++
  }

  return { count, increment }
})

export const useTabStore = defineStore('tab', () => {
  const activeName = ref(tabs[0].pagePath)

  function setActiveName(newActiveName: string) {
    activeName.value = newActiveName
  }

  return {
    activeName,
    setActiveName
  }
})

//userStore
export const useUserStore = defineStore('user', () => {
  const username = ref('请登入/注册')
  const avatarUrl = ref('')
  const isLogin = ref(false)

  function setUsername(newUsername: string) {
    username.value = newUsername
  }

  function setIsLogin(value: boolean) {
    isLogin.value = value
  }

  function setAvatarUrl(url: string) {
    avatarUrl.value = url
  }

  return {
    username,
    isLogin,
    avatarUrl,
    setUsername,
    setIsLogin,
    setAvatarUrl
  }
})
