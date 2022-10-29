<script setup lang="ts">
import { useAnnouncementsQuery } from '@/composables/courses'
import { computed } from 'vue'

const props = defineProps<{
  courseId: number
}>()

const { data: announcementData } = useAnnouncementsQuery(props.courseId)
const announcements = computed(() => announcementData.value?.dataList ?? [])
const isEmpty = computed(() => announcements.value.length === 0)
</script>

<template>
  <view v-if="isEmpty">
    <nut-empty image="empty" description="暂无公告" />
  </view>
  <view v-else class="w-full bg-white rounded-lg px-4 py-3 box-border">
    <view v-for="(a, i) in announcements">
      <view class="text-normal text-gray-9">{{ a.title }}</view>
      <view class="text-description mt-1 text-gray-4">{{
        new Date(a.Time).toLocaleDateString()
      }}</view>
      <nut-divider v-if="i < announcements.length!" class="text-gray-200 my-3" />
    </view>
  </view>
</template>
