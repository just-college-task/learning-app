<script setup lang="ts">
import Taro from '@tarojs/taro'

function toMyCourses() {
  Taro.navigateTo({ url: '/pages/my/views/myCourses' })
}
function toManagerCourses() {
  Taro.navigateTo({ url: '/pages/my/views/managerCourses' })
}
function toCertificates() {
  Taro.navigateTo({ url: '/pages/my/views/certificate' })
}
</script>

<template>
  <view class="body flex flex-col justify-center w-580px bg-white mt-45px px-5 rounded-24px">
    <view class="flex w-full h-104px justify-center items-center" @click="toMyCourses">
      <nut-icon name="message" size="20" class="mr-32px"></nut-icon>
      <view class="flex w-full h-full items-center justify-between border-b-1 border-b-gray-2">
        <text>我的课程</text>
        <view class="arr"></view>
      </view>
    </view>
    <view class="flex w-full h-104px justify-center items-center" @click="toManagerCourses">
      <nut-icon name="people" size="20" class="mr-32px"></nut-icon>
      <view class="flex w-full h-full items-center justify-between border-b-1 border-b-gray-2">
        <text>我管理的课程</text>
        <view class="arr"></view>
      </view>
    </view>
    <view class="flex w-full h-104px justify-center items-center" @click="toCertificates">
      <nut-icon name="success" size="20" class="mr-32px"></nut-icon>
      <view class="flex w-full h-full items-center justify-between">
        <text>我的证书</text>
        <view class="arr"></view>
      </view>
    </view>
  </view>
</template>
