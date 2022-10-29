<script setup lang="ts">
import { useAnnouncementsQuery } from '@/composables/courses'
import useListQueryContainer from '@/composables/useListQueryContainer'
// import { computed } from 'vue'

const props = defineProps<{
  courseId: number
}>()

const query = useAnnouncementsQuery(props.courseId)
const ListQueryContainer = useListQueryContainer(query)
</script>

<template>
  <list-query-container v-slot="{ list }">
    <view class="w-full bg-white rounded-lg px-4 py-3 box-border">
      <view v-for="(a, i) in list">
        <view class="text-normal text-gray-9">{{ a.title }}</view>
        <view class="text-description mt-1 text-gray-4">{{
          new Date(a.Time).toLocaleDateString()
        }}</view>
        <nut-divider v-if="i < list.length!" class="text-gray-200 my-3" />
      </view>
    </view>
  </list-query-container>
</template>
