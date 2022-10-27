import { defineStore } from 'pinia'
import { ref } from 'vue'
import { tabs } from '@/definitions'

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
  const nickname = ref('匿名用户')
  const avatar = ref('')
  const isLogin = ref(false)

  function setIsLogin(value: boolean) {
    isLogin.value = value
  }

  return {
    nickname,
    isLogin,
    avatar,
    setIsLogin
  }
})
