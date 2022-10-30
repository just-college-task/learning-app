<script setup lang="ts">
import { usePostAnnouncement } from '@/composables/courses'
import Taro from '@tarojs/taro'
import { useRouter } from '@tarojs/taro'
import { ref } from 'vue'

const router = useRouter()
const courseId = Number(router.params.id!)

const postAnnouncement = usePostAnnouncement(courseId)

const newObject = ref({
  title: '',
  content: ''
})

const postNew = async () => {
  await postAnnouncement.mutateAsync({
    ...newObject.value,
    time: new Date().toISOString(),
    courseId: courseId
  })
  Taro.navigateBack()
}
</script>

<template>
  <nut-form class="create-announcement">
    <nut-form-item label="标题">
      <input
        class="nut-input-text text-left"
        type="text"
        v-model="newObject.title"
        placeholder="请输入"
      />
    </nut-form-item>
    <nut-form-item label="内容">
      <nut-textarea
        type="text"
        v-model="newObject.content"
        text-align="left"
        placeholder="请输入"
      />
    </nut-form-item>
    <view class="mt-3 flex justify-center">
      <nut-button type="info" @click="postNew">发布</nut-button>
    </view>
  </nut-form>
</template>

<style>
.create-announcement .nut-input-text.text-left {
  text-align: left;
}
</style>
