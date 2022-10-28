<script setup lang="ts">
import { useUserStore } from '@/store'
import { computed } from 'vue'
import { wechatLogin } from '@/utils/wechat'
// import { Router } from 'tarojs-router-next'

const props = defineProps<{
  nickname: string
  avatar: string
  userType: string
  isLogin: boolean
}>()

const userStore = useUserStore()
const isLogin = computed(() => userStore.isLogin)

const HOST = process.env.API_HOST
const DEFAULT_URL = 'https://www.w3schools.com/howto/img_avatar.png'

function handleLoginClicked() {
  // Router.toLogin()
  wechatLogin()
}
</script>
<template>
  <view class="userCard px-48px rounded-24px">
    <nut-avatar size="75" icon="image" :url="props.avatar ? HOST + props.avatar : DEFAULT_URL" />
    <nut-button v-if="!isLogin" type="primary" @click="handleLoginClicked">登录</nut-button>
    <view v-else class="flex flex-col">
      <view class="text-lg text-center font-400">{{ props.nickname }}</view>
      <view
        class="py-1 px-2 mr-auto text-sm font-400 text-center text-gray-4 bg-gray-1 rounded-full"
        >{{ props.userType }}</view
      >
    </view>
  </view>
</template>

<style lang="scss">
.userCard {
  display: flex;
  width: 580px;
  height: 214px;
  align-items: center;
  z-index: 1;
  margin: 100px 0 0 0;

  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  .nut-avatar {
    margin: 0 18px 0 0;
  }

  view {
    font-family: 'Noto Sans SC';
    font-style: normal;
  }
}
</style>
