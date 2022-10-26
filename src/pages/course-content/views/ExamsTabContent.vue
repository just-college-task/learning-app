<script setup lang="ts">
import Taro from '@tarojs/taro'

function handleClicked() {
  Taro.navigateTo({ url: '/pages/course-content/views/exams/index' })
}
</script>

<template>
  <view class="w-full bg-white rounded-lg px-4 py-3 box-border">
    <view>
      <view class="text-normal text-gray-9">考试</view>
      <view class="text-description mt-1 text-gray-4">截止时间：2022-10-20</view>
      <nut-divider class="text-gray-200 my-3" />
      <view class="flex justify-between">
        <view class="text-description text-gray-9">总分：100</view>
        <nut-button size="mini" type="primary" plain @click="handleClicked">进入测试</nut-button>
      </view>
    </view>
  </view>
</template>
