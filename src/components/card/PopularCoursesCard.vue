<script setup lang="ts">
import Card from './Card.vue'
import CourseItem from '../CourseItem.vue'
import { usePopularCoursesQuery } from '@/composables/courses'

usePopularCoursesQuery(
  {
    page: 1,
    size: 4
  },
  {
    onSuccess: res => {
      console.log('fronz ~ res', res)
    }
  }
)
</script>

<template>
  <Card title="热门课程" label="更多">
    <CourseItem>
      <view class="flex justify-end">
        <view class="text-xs text-gray-400"> 111 人参加 </view>
      </view>
    </CourseItem>
  </Card>
</template>
