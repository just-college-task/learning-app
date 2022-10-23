<template>
  <view class="w-full bg-white rounded-lg px-4 py-3 box-border">
    <view v-for="i in 3">
      <view class="text-normal text-gray-9">开课通知</view>
      <view class="text-description mt-1 text-gray-4">2022-10-20</view>
      <nut-divider v-if="i < 3" class="text-gray-200 my-3" />
    </view>
  </view>
</template>
