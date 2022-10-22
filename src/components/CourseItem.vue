<script setup lang="ts">
import Taro from '@tarojs/taro'
function handleDetailClicked() {
  Taro.navigateTo({ url: `/pages/course-detail/index` })
}
</script>

<template>
  <view class="flex gap-3">
    <img
      class="h-144 w-240 object-cover"
      src="https://img-ph-mirror.nosdn.127.net/tYhzuDVilzlDOo2bEyH_Qg==/6608226511143817333.jpg?imageView&quality=100&thumbnail=230y130"
    />
    <view class="flex-1 flex flex-col justify-between">
      <view class="flex flex-col gap-1">
        <view class="text-sm" @click="handleDetailClicked"> 程序设计入门——C语言 </view>
        <view class="text-xs text-gray-500"> 浙江大学 </view>
      </view>
      <slot> </slot>
    </view>
  </view>
</template>
