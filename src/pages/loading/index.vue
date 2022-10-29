<script setup lang="ts">
import { useUserInfoQuery } from '@/composables/user'
import Taro, { useLoad } from '@tarojs/taro'
import { STORAGE_TOKEN_KEY } from '@/definitions'
import { useUserStore } from '@/store'

const hasToken = Boolean(Taro.getStorageSync(STORAGE_TOKEN_KEY))
const userStore = useUserStore()

const { refetch } = useUserInfoQuery({
  enabled: false,
  onSuccess: info => {
    userStore.setInfo(info)
    userStore.setIsLogin(true)
  }
})

useLoad(async () => {
  if (hasToken) {
    await refetch.value()
  }

  Taro.switchTab({ url: '/pages/index/index' })
})
</script>

<template>
  <view class="w-screen h-screen grid place-content-center">
    <nut-icon class="text-primary" name="loading" size="24" />
  </view>
</template>
