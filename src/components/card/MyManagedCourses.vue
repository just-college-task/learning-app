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
          <view>
            <view class="text-gray-400 text-xs">已学 3/20 节</view>
            <nut-progress
              class="rounded overflow-hidden mt-1"
              percentage="30"
              :show-text="false"
              size="small"
            />
          </view>
        </CourseItem>
      </view>
    </list-query-container>
  </Card>
</template>
