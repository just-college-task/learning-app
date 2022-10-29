<script setup lang="ts">
import { useAnnouncementsQuery, usePostAnnouncement } from '@/composables/courses'
import useListQueryContainer from '@/composables/useListQueryContainer'
import { ref, watch } from 'vue'

const props = defineProps<{
  courseId: number
}>()

const query = useAnnouncementsQuery(props.courseId)
const ListQueryContainer = useListQueryContainer(query)
const postAnnouncement = usePostAnnouncement(props.courseId)

const initObject = {
  title: '',
  content: ''
}

const showNew = ref(false)
const newObject = ref({ ...initObject })

watch(showNew, newValue => {
  if (newValue) {
    newObject.value = { ...initObject }
  }
})

const postNew = async () => {
  await postAnnouncement.mutateAsync({
    ...newObject.value,
    time: new Date().toISOString(),
    courseId: props.courseId
  })
  showNew.value = false
  query.refetch.value()
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
    <nut-button
      v-if="!showNew"
      type="info"
      class="fixed right-24 bottom-24"
      @click="showNew = true"
    >
      发布公告
    </nut-button>
    <view v-if="showNew" class="fixed left-0 bottom-0 min-h-xl p-3">
      <view class="relative flex flex-col items-stretch">
        <nut-input v-model="newObject.title" label="标题" placeholder="标题" />
        <nut-input v-model="newObject.content" label="内容" placeholder="内容" />
        <view class="mt-3 flex justify-end">
          <nut-button class="mr-3" @click="showNew = false">取消</nut-button>
          <nut-button type="info" @click="postNew">发布公告</nut-button>
        </view>
      </view>
    </view>
  </list-query-container>
</template>
