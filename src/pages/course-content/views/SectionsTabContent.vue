<script setup lang="ts">
import { useCoursePartsQuery } from '@/composables/courses'
import Taro from '@tarojs/taro'

const props = defineProps<{
  courseId: number
}>()
console.info(props.courseId)

const partsQuery = useCoursePartsQuery(props.courseId)
const parts = partsQuery.data

function handleSectionClicked() {
  Taro.navigateTo({ url: '/pages/section-content/index' })
}
</script>

<template>
  <view v-for="(part, i) in parts">
    <view class="flex items-center" @click="handleSectionClicked">
      <view class="grow flex gap-1 items-center">
        <view>
          <nut-tag plain type="primary">视频</nut-tag>
        </view>
        <view class="text-28 leading-6">{{ i + 1 }}. {{ part.name }} </view>
      </view>
      <nut-icon name="checked" class="text-32 text-primary"></nut-icon>
    </view>
    <nut-divider v-if="i < parts!.length - 1" class="text-gray-200" />
  </view>
</template>
