<script setup lang="ts">
import Card from './Card.vue'
import CourseItem from '@/components/CourseItem.vue'
import useListQueryContainer from '@/composables/useListQueryContainer'
import { useManagedCoursesQuery } from '@/composables/courses'

const ListQueryContainer = useListQueryContainer(useManagedCoursesQuery())
</script>

<template>
  <Card title="我管理的课程">
    <list-query-container v-slot="{ list }">
      <view class="flex flex-col gap-4">
        <CourseItem v-for="course in list" :course="course">
          <view class="flex justify-end">
            <view class="text-xs text-gray-400"> {{ course.members }} 人参加 </view>
          </view>
        </CourseItem>
      </view>
    </list-query-container>
  </Card>
</template>
