<script setup lang="ts">
import Taro from '@tarojs/taro'
import { wechatLogin, login } from '@/utils/user'
import Router from 'tarojs-router-next'
import { reactive } from 'vue'
import { useQueryClient } from 'vue-query'

const queryClient = useQueryClient()

Taro.setNavigationBarTitle({ title: '登录' })

const userData = reactive({
  phoneNumber: '',
  password: ''
})

async function Login() {
  if (!userData.phoneNumber || !userData.password) {
    Taro.showToast({
      title: '数据为空',
      icon: 'error'
    })
    throw new Error('userData empty')
  }
  const res = login({
    phoneNumber: userData.phoneNumber,
    password: userData.password
  })
  if (res) {
    Taro.showToast({
      title: '登入成功',
      icon: 'success',
      duration: 1000
    })
    setTimeout(() => {
      Router.back()
    }, 2000)
  }
}

async function handleLoginClicked() {
  await wechatLogin()
  queryClient.invalidateQueries()
  Router.back()
  Taro.showToast({
    title: '登录成功！',
    icon: 'success'
  })
}
</script>

<template>
  <view class="main page-wrapper h-100vh flex flex-col items-center">
    <view class="bg w-full h-40vh mt-8"></view>
    <text class="w-200 text-xl my-2 font-semibold text-center">云课堂</text>
    <view class="userForm mx-15">
      <nut-form :model-value="userData">
        <nut-form-item prop="phoneNumber">
          <input
            class="nut-input-text"
            v-model="userData.phoneNumber"
            placeholder="手机号"
            type="text"
          />
        </nut-form-item>
        <nut-form-item prop="password">
          <input
            class="nut-input-text"
            v-model="userData.password"
            placeholder="密码"
            type="safe-password"
          />
        </nut-form-item>
      </nut-form>
      <view class="w-full flex justify-between">
        <text class="text-gray-400 text-sm">忘记密码</text>
        <view class="text-sm" @click="() => Router.toRegister()">快速注册</view>
      </view>
      <nut-button type="primary" @click="Login">登录</nut-button>
      <nut-button type="primary" @click="handleLoginClicked">微信登录</nut-button>
    </view>
  </view>
</template>

<style lang="scss">
.main {
  .bg {
    transform: scale(1.1);
    background: center url('../../../public/static/img/bg.png');
    background-repeat: no-repeat;
  }

  .userForm {
    .nut-cell-group__warp {
      border-radius: 10px !important;
    }
    .nut-form-item__body__slots {
      input {
        text-align: left;
      }
    }
    .nut-button {
      margin-top: 10px;
      width: 252px;
      height: 35px;
    }
  }
}
</style>
