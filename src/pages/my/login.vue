<script setup lang="ts">
import Taro from '@tarojs/taro'
import { useUserStore } from '@/store'

Taro.setNavigationBarTitle({ title: '登入' })

const userStore = useUserStore()
function setLogin() {
  // userStore.setIsLogin(true)
}
</script>

<template>
  <view class="main">
    <view class="bg"></view>
    <button @click="setLogin">Login</button>
  </view>
</template>

<style lang="scss">
.main {
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  .bg {
    width: 272px;
    height: 305px;
    margin-top: 70px;
    background-image: url('../../../public/static/img/bg.png');
  }
}
</style>
