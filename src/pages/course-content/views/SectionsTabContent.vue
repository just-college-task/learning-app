<script setup lang="ts">
import Taro from '@tarojs/taro'

function handleSectionClicked() {
  Taro.navigateTo({ url: '/pages/section-content/index' })
}
</script>

<template>
  <view class="flex items-center" @click="handleSectionClicked">
    <view class="grow flex gap-1 items-center">
      <view>
        <nut-tag plain type="primary">视频</nut-tag>
      </view>
      <view class="text-28 leading-6"> 1. 排比、对偶与层进 </view>
    </view>
    <nut-icon name="checked" class="text-32 text-primary"></nut-icon>
  </view>
  <nut-divider class="text-gray-200" />
  <view class="flex items-center">
    <view class="grow flex gap-1 items-center">
      <view>
        <nut-tag plain type="primary">视频</nut-tag>
      </view>
      <view class="text-28 leading-6"> 2. 排比、对偶与层进 </view>
    </view>
    <nut-icon name="checked" class="text-32 text-primary"></nut-icon>
  </view>
</template>
