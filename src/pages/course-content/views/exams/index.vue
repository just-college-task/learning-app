<script setup lang="ts">
import { ref } from 'vue'

const radioVal = ref(0)
</script>

<template>
  <view class="question w-full h-100vh flex flex-col">
    <view class="flex justify-center p-3 border-b-gray-2 border-b-1">
      <view class="font-semibold text-lg">题目</view>
    </view>
    <view class="flex flex-col p-3">
      <view class="text-normal text-gray-9"
        >1. 大学生适应新的学习、生活环境，很重要的一点就是_____</view
      >
      <nut-radiogroup v-model="radioVal" class="p-3" text-position="left">
        <nut-radio
          class="h-100 border-b-gray-2 border-b-1"
          label="1"
          icon-size="19"
          icon-active-name="checklist"
          >A. 选项1</nut-radio
        >
        <nut-radio
          class="h-100 border-b-gray-2 border-b-1"
          label="2"
          icon-size="19"
          icon-active-name="checklist"
          >B. 选项2</nut-radio
        >
      </nut-radiogroup>
    </view>
    <view class="flex justify-between mt-auto p-4 px-6">
      <nut-button plain type="primary">上一题</nut-button>
      <nut-button type="primary">下一题</nut-button>
    </view>
  </view>
</template>

<style lang="scss">
.question {
  .nut-radio__label {
    font-size: 17px;
    line-height: 40px;
    color: rgba(0, 0, 0, 0.65);
  }
  .nut-button {
    width: 48%;
  }
}
</style>
