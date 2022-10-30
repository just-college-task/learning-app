<script setup lang="ts">
import Card from './Card.vue'
import CourseItem from '../CourseItem.vue'
import CourseItemSkeleton from '../CourseItemSkeleton.vue'
import { usePopularCoursesQuery } from '@/composables/courses'

const { data, isLoading } = usePopularCoursesQuery({
  page: 1,
  size: 4
})
</script>

<template>
  <Card title="所有课程">
    <view class="flex flex-col gap-4" v-if="isLoading || !data?.dataList">
      <CourseItemSkeleton />
      <CourseItemSkeleton />
    </view>
    <view v-else class="flex flex-col gap-4">
      <CourseItem v-for="course in data.dataList" :course="course">
        <view class="flex justify-end">
          <view class="text-xs text-gray-400"> {{ course.members }} 人参加 </view>
        </view>
      </CourseItem>
    </view>
  </Card>
</template>
