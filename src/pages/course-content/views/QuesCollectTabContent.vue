<script setup lang="ts">
import { ACTIVE_SHEET_PROVIDE_KEY } from '@/definitions'
import { inject } from 'vue'

const activeSheet = inject(ACTIVE_SHEET_PROVIDE_KEY)

activeSheet?.setMenuItems([
  {
    name: '编辑'
  },
  {
    name: '删除'
  }
])

function handleMoreClicked() {
  activeSheet?.open()
}

function handleLongPressed() {
  activeSheet?.open()
}
</script>

<template>
  <view
    v-on:longpress="handleLongPressed"
    class="w-full bg-white rounded-lg px-4 py-3 box-border flex justify-between items-center"
  >
    <view>
      <view class="text-normal text-gray-9">试题集 1</view>
      <view class="text-description text-gray-400 mt-1">期末考试用试题集</view>
    </view>
    <nut-icon @click="handleMoreClicked" class="rotate-90" name="more-s" size="24"></nut-icon>
  </view>
</template>
