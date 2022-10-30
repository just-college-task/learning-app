<script setup lang="ts">
import { usePostCourseMutation } from '@/composables/courses'
import { NewCourse } from 'types/api'
import { ref, reactive } from 'vue'
import { getImgUrl, getUploadHeaders } from '@/utils/helper'
import Router from 'tarojs-router-next'
import { useQueryClient } from 'vue-query'

const formData = reactive<NewCourse>({
  name: '',
  profile: '',
  poster: 'https://mooc-image.nosdn.127.net/16439bbd5946461b81a00636c4dc3cb3.jpg'
})
const ruleForm = ref<any>(null)

const { mutateAsync } = usePostCourseMutation()
const queryClient = useQueryClient()

const submit = async () => {
  const { valid } = await ruleForm.value.validate()
  if (valid) {
    await mutateAsync(formData)
    Router.back()
    queryClient.invalidateQueries()
  }
}
const reset = () => {
  ruleForm.value.reset()
}
</script>

<template>
  <nut-form :model-value="formData" ref="ruleForm">
    <nut-form-item
      label="名称"
      prop="name"
      required
      :rules="[{ required: true, message: '请填写课程名称' }]"
    >
      <input class="nut-input-text" v-model="formData.name" type="text" />
    </nut-form-item>
    <nut-form-item
      label="简介"
      prop="profile"
      required
      :rules="[{ required: true, message: '请填写课程简介' }]"
    >
      <input class="nut-input-text" v-model="formData.profile" type="text" />
    </nut-form-item>
    <nut-form-item
      label="封面"
      prop="poster"
      required
      :rules="[{ required: true, message: '请上传课程封面' }]"
    >
      <nut-uploader
        name="poster"
        :headers="getUploadHeaders()"
        :url="getImgUrl('/api/course/upload')"
        :maximum="1"
      >
      </nut-uploader>
    </nut-form-item>
    <nut-form-item label="公开">
      <nut-switch :value="true"></nut-switch>
    </nut-form-item>
    <nut-cell>
      <nut-button type="primary" size="small" style="margin-right: 10px" @click="submit"
        >提交</nut-button
      >
    </nut-cell>
  </nut-form>
</template>
