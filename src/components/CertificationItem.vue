<script setup lang="ts">
import { Course } from 'types/api'
import { toRefs } from 'vue'
import { Router } from 'tarojs-router-next'

function handleDetailClicked() {
  Router.navigate({
    url: `/pages/course-detail/index?id=${course.value.courseId}`
  })
}

const DEFAULT_COVER_SRC = `https://img-ph-mirror.nosdn.127.net/tYhzuDVilzlDOo2bEyH_Qg==/6608226511143817333.jpg?imageView&quality=100&thumbnail=230y130`

const props = defineProps<{ course: Course }>()
const { course } = toRefs(props)
</script>

<template>
  <view class="flex gap-3" @click="handleDetailClicked">
    <img class="h-144 w-240 object-cover" :src="course.course.poster ?? DEFAULT_COVER_SRC" />
    <view class="flex-1 flex flex-col justify-between">
      <view class="flex flex-col gap-1">
        <view>恭喜完成课程</view>
        <view class="text-xl">{{ course.course.name }} </view>
        <view class="text-xs text-gray-500">{{ course.course.profile }}</view>
      </view>
    </view>
  </view>
</template>
