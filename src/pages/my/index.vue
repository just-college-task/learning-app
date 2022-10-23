<!-- eslint-disable @typescript-eslint/no-unused-vars -->
<script setup lang="ts">
import Taro from '@tarojs/taro'
import { useUserStore } from '@/store'
import { computed, ref } from 'vue'

const userStore = useUserStore()
const isLoginRef = computed(() => userStore.isLogin)
const nickname = ref('请登入/注册')

function handleClick() {
  if (!isLoginRef.value) {
    // Taro.navigateTo({
    //   url: '/pages/my/login'
    // })
    userStore.wechatLogin()
    Taro.getUserProfile({
      success: res => {
        //test
        console.log(res)
        nickname.value = res.userInfo.nickName
      },
      desc: '用于完善会员资料',
      lang: 'zh_CN'
    })
  }
}
</script>

<template>
  <view class="person page-wrapper flex flex-col items-center">
    <view class="header flex justify-center w-full">
      <view class="back-curves"> </view>
      <view class="userCard" @click="handleClick">
        <nut-avatar size="75" icon="image"> </nut-avatar>
        <text>{{ nickname }}</text>
        <nut-icon v-if="isLoginRef" name="right" size="18px" class="ml-15"></nut-icon>
      </view>
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

    .userCard {
      display: flex;
      width: 600px;
      height: 208px;
      align-items: center;
      z-index: 1;
      margin: 80px 0 0 0;

      background: #ffffff;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      border-radius: 8px;
      font-weight: bold;

      .nut-avatar {
        margin: 0 30px 0 13px;
      }

      text {
        width: 194px;
        height: 36px;
        font-weight: 700;
        font-size: 36px;
        line-height: 36px;
      }
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
