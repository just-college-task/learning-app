<!-- eslint-disable @typescript-eslint/no-unused-vars -->
<script setup lang="ts">
import { useUserStore } from '@/store'
import { wechatLogin } from '@/utils/wechat'
import { computed } from 'vue'
import UserCard from '@/components/user/userCard.vue'

const userStore = useUserStore()
const isLoginRef = computed(() => userStore.isLogin)
const nickname = computed(() => userStore.username)
const avatarRef = computed(() => userStore.avatarUrl)

function handleClick() {
  if (!isLoginRef.value) {
    wechatLogin()
  }
}
</script>

<template>
  <view class="person page-wrapper flex flex-col items-center">
    <view class="header flex justify-center w-full">
      <view class="back-curves"> </view>
      <user-card
        :nickname="nickname"
        :avatar="avatarRef"
        :isLogin="isLoginRef"
        @click="handleClick"
      />
    </view>
    <view class="body flex flex-col w-full mt-45px h-50vh">
      <view class="flex w-full h-90px items-center justify-between">
        <text class="pl-10">我的课程</text>
        <view class="arr pr-10"></view>
      </view>
      <view class="flex w-full h-90px items-center justify-between">
        <text class="pl-10">我管理的课程</text>
        <view class="arr pr-10"></view>
      </view>
      <view class="flex w-full h-90px items-center justify-between">
        <text class="pl-10">个人证书</text>
        <view class="arr pr-10"></view>
      </view>
    </view>
    <view class="footer flex flex-col w-full items-center">
      <view class="h-10 w-689px border-b-gray-4 border-b-3"></view>
      <view class="flex w-full h-90px items-center justify-between">
        <text class="pl-10">关于App</text>
        <view class="arr pr-10"></view>
      </view>
    </view>
  </view>
</template>

<style lang="scss">
.person {
  .header {
    .back-curves {
      width: 100%;
      height: 245px;
      position: absolute;
      border-radius: 10% 10% 50% 50% / 0% 0% 35% 35%;
      background: #2c68ff;
    }
  }

  .arr {
    width: 64px;
    height: 64px;
    background-repeat: no-repeat;
    background-position: center;
    background-image: url(../../../public/static/img/right-arrow.png);
  }
  text {
    font-family: 'Noto Sans SC';
    font-style: normal;
    font-weight: 500;
    font-size: 34px;
    line-height: 36px;
  }
}
</style>
