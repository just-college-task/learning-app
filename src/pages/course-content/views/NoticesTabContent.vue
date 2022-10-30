<script setup lang="ts">
import { useAnnouncementsQuery } from '@/composables/courses'
import useListQueryContainer from '@/composables/useListQueryContainer'
import { useUserStore } from '@/store'
import { Router } from 'tarojs-router-next'
import { computed } from 'vue'
import { Course } from 'types/api'

const props = defineProps<{
  courseId: number
  course?: Course
}>()

const query = useAnnouncementsQuery(props.courseId)
const ListQueryContainer = useListQueryContainer(query)
const user = useUserStore()
const canCreate = computed(() => user.info?.userId === props.course?.userid)

function showNew() {
  Router.navigate({
    url: `/pages/create-announcement/index?id=${props.courseId}`
  }).then(() => {
    query.refetch.value()
  })
}
</script>

<template>
  <list-query-container v-slot="{ list }">
    <view class="w-full bg-white rounded-lg px-4 py-3 box-border">
      <view v-for="(a, i) in list">
        <view class="text-normal text-gray-9">{{ a.title }}</view>
        <view class="text-description mt-1 text-gray-4">{{
          new Date(a.time).toLocaleDateString()
        }}</view>
        <view class="text-description mt-1">{{ a.content }}</view>
        <nut-divider v-if="i < list.length! - 1" class="text-gray-200 my-3" />
      </view>
    </view>
    <nut-button v-if="canCreate" type="info" class="fixed right-24 bottom-24" @click="showNew()">
      发布公告
    </nut-button>
  </list-query-container>
</template>
