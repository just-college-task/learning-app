<script setup lang="ts">
import Taro from '@tarojs/taro'
// import Router from 'tarojs-router-next'

const props = defineProps<{
  title: string
  label?: string
}>()
function handleLabelClick() {
  Taro.navigateTo({ url: '/pages/course-all/index' })
}
</script>

<template>
  <view class="w-full bg-white p-[12px_16px_20px] box-border mt-3 shadow-sm rounded-md">
    <view class="flex justify-between">
      <span class="text-base text-gray-9">{{ props.title }}</span
      ><span class="text-xs text-gray-4" @click="handleLabelClick">{{ props.label }}</span>
    </view>
    <view class="pt-3">
      <slot></slot>
    </view>
  </view>
</template>
