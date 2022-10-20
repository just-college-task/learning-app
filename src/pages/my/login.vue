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
    <text class="lg-title">云课堂</text>
    <input placeholder="用户名/手机号" />
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
    height: 258px;
    margin-top: 70px;
    background-image: url('../../../public/static/img/bg.png');
  }

  .lg-title {
    width: 103px;
    height: 42px;
    font-family: 'Noto Sans SC';
    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    line-height: 46px;
  }
}
</style>
