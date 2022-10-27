<script setup lang="ts">
import Taro from '@tarojs/taro'
import { useUserStore } from '@/store'
import { register } from '@/api/user'
import { wechatLogin } from '@/utils/wechat'

Taro.setNavigationBarTitle({ title: '登入' })

const userStore = useUserStore()
function setLogin() {
  userStore.setIsLogin(true)
}

function navigateToRegister() {
  Taro.navigateTo({
    url: '/pages/my/register'
  })
}

function testAPI() {
  const data = {
    phoneNumber: '11231231231',
    nickname: '11231231231',
    password: 'gaowanlu'
  }
  register(data)
}
</script>

<template>
  <view class="main">
    <view class="bg"></view>
    <text class="lg-title">云课堂</text>
    <view class="active">
      <input placeholder="用户名/手机号" class="input-user" />
      <input placeholder="密码" class="input-passwd" />
      <view class="w-full flex justify-between">
        <text class="text-gray-400">忘记密码</text>
        <view @click="navigateToRegister">快速注册</view>
      </view>
      <nut-button type="primary" @click="setLogin">登录</nut-button>
      <nut-button type="primary" @click="testAPI">注册</nut-button>
      <nut-button type="primary" @click="wechatLogin">微信登录</nut-button>
    </view>
  </view>
</template>

<style lang="scss">
.main {
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;

  .bg {
    width: 423px;
    height: 450px;
    margin-top: 70px;
  }

  .lg-title {
    width: 123px;
    height: 42px;
    font-family: 'Noto Sans SC';
    font-style: normal;
    font-weight: 400;
    font-size: 40px;
    line-height: 46px;

    margin-bottom: 35px;
  }

  .active {
    display: flex;
    flex-flow: column;
    width: 423px;
    height: 450px;
    align-items: center;

    input {
      width: 100%;
      height: 60px;
      background: rgba(0, 0, 0, 0.04);
      border-radius: 10px;
      margin-bottom: 10px;
      padding-left: 10px;
    }

    .nut-button {
      margin-top: 20px;
      width: 252px;
      height: 35px;
    }
  }
}
</style>
