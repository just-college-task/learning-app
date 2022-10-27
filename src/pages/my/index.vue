<!-- eslint-disable @typescript-eslint/no-unused-vars -->
<script setup lang="ts">
import { useUserStore } from '@/store'
import { wechatLogin } from '@/utils/wechat'
import { computed } from 'vue'
import UserCard from '@/components/user/userCard.vue'
import Router from 'tarojs-router-next'
import UserOperate from '@/components/user/userOperate.vue'

const userStore = useUserStore()
const isLoginRef = computed(() => userStore.isLogin)
const nickname = computed(() => userStore.nickname)
const avatar = computed(() => userStore.avatar)

function handleClick() {
  if (!isLoginRef.value) {
    wechatLogin()
  }
}

function handleItemClicked() {
  Router.navigate({ url: '/pages/my-courses/index' })
}
</script>

<template>
  <view class="person page-wrapper flex flex-col items-center">
    <view class="header flex justify-center w-full">
      <view class="back-curves w-full h-30vh absolute"> </view>
      <user-card
        :nickname="nickname"
        :avatar="avatar"
        :isLogin="isLoginRef"
        userType="普通用户"
        @click="handleClick"
      />
    </view>
    <user-operate />
    <view class="footer flex flex-col w-580px bg-white px-5 mt-45px rounded-24px items-center">
      <view class="flex w-full h-104px justify-center items-center">
        <nut-icon name="tips" size="20" class="mr-32px"></nut-icon>
        <view class="flex w-full h-full items-center justify-between">
          <text>关于App</text>
          <view class="arr"></view>
        </view>
      </view>
    </view>
  </view>
</template>

<style lang="scss">
.person {
  .header {
    .back-curves {
      position: absolute;
      transform: scale(1.1);
      background: center top url('../../../public/static/img/userBg.png');
      background-size: contain;
      background-repeat: no-repeat;
    }
  }
  .arr {
    width: 64px;
    height: 64px;
    background-repeat: no-repeat;
    background-position: center;
    background-image: url('../../../public/static/img/right-arrow.png');
  }
}
</style>
