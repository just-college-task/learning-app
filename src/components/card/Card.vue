<script setup lang="ts">
const props = defineProps<{
  title: string
  label?: string
}>()
</script>

<template>
  <view class="w-full bg-white p-[12px_16px_20px] box-border mt-3 shadow-sm rounded-md">
    <view class="flex justify-between">
      <span class="text-base text-gray-9">{{ props.title }}</span
      ><span class="text-xs text-gray-4">{{ props.label }}</span>
    </view>
    <view class="pt-3">
      <slot></slot>
    </view>
  </view>
</template>
