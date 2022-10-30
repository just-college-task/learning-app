<script setup lang="ts">
import { useUserStore } from '@/store'
import { computed } from 'vue'
import UserCard from './views/UserCard.vue'
import UserOperate from './views/UserOperate.vue'
import { logout } from '@/utils/user'
import Router from 'tarojs-router-next'

const userStore = useUserStore()
const isLogin = computed(() => userStore.isLogin)
</script>

<template>
  <view class="person page-wrapper tab-page-wrapper relative w-full flex flex-col items-center">
    <view class="header flex justify-center w-full">
      <view class="back-curves w-full h-30vh absolute"> </view>
      <user-card />
    </view>
    <user-operate />
    <view class="footer flex flex-col w-580px bg-white px-5 mt-45px rounded-24px items-center">
      <view class="flex w-full h-104px justify-center items-center" @click="() => Router.toAbout()">
        <nut-icon name="ask" size="20" class="mr-32px"></nut-icon>
        <view class="flex w-full h-full items-center justify-between">
          <text>关于App</text>
          <view class="arr"></view>
        </view>
      </view>
    </view>
    <view class="w-full px-6 mt-35px flex justify-center box-border">
      <nut-button v-if="isLogin" type="danger" class="w-full" @click="logout">注销</nut-button>
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
