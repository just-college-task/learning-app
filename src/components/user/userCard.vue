<script setup lang="ts">
const props = defineProps<{
  nickname: string
  avatar: string
  userType: string
  isLogin: boolean
}>()

const DEFAULT_URL = 'https://www.w3schools.com/howto/img_avatar.png'
</script>
<template>
  <view class="userCard px-48px rounded-24px">
    <nut-avatar size="75" icon="image" :url="props.avatar ? props.avatar : DEFAULT_URL" />
    <nut-button type="primary" v-if="!props.isLogin">登录</nut-button>
    <view class="flex flex-col">
      <view v-if="props.isLogin" class="text-lg text-center font-400">{{ props.nickname }}</view>
      <view
        v-if="props.isLogin"
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
