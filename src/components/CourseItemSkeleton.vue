<template>
  <view class="flex gap-3">
    <nut-skeleton width="240rpx" height="144rpx" />
    <view class="flex-1 flex flex-col justify-between">
      <view class="flex flex-col gap-1">
        <nut-skeleton width="225px" height="22px" :title="false" />
        <nut-skeleton width="100px" height="17px" :title="false" />
        <nut-skeleton width="225px" height="22px" :title="false" />
      </view>
      <slot> </slot>
    </view>
  </view>
</template>
