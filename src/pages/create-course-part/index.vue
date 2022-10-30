<script setup lang="ts">
import { usePostCoursePart } from '@/composables/courses'
import Taro from '@tarojs/taro'
import { useRouter } from '@tarojs/taro'
import { CoursePart } from 'types/api'
import { ref } from 'vue'

const router = useRouter()
const courseId = Number(router.params.id!)

const postCoursePart = usePostCoursePart(courseId)

const newObject = ref({
  name: '',
  sort: ''
})

const postNew = async () => {
  const videoUrl = 'video.mp4'
  await postCoursePart.mutateAsync({
    name: newObject.value.name,
    sort: Number(newObject.value.sort),
    video: videoUrl,
    courseId: courseId
  })
  Taro.navigateBack()
}
</script>

<template>
  <nut-form class="create-announcement">
    <nut-form-item label="章节编号">
      <input
        class="nut-input-text text-left"
        type="number"
        v-model="newObject.sort"
        placeholder="请输入"
      />
    </nut-form-item>
    <nut-form-item label="章节标题">
      <input
        class="nut-input-text text-left"
        type="text"
        v-model="newObject.name"
        placeholder="请输入"
      />
    </nut-form-item>
    <nut-button type="info" class="w-full" @click="postNew">发布章节</nut-button>
  </nut-form>
</template>

<style>
.create-announcement .nut-input-text.text-left {
  text-align: left;
}
</style>
