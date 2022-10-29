<script setup lang="ts">
import Taro, { useRouter } from '@tarojs/taro'
import { ref } from 'vue'
import { useCourseQuery } from '@/composables/courses'

const router = useRouter()
const courseId = Number(router.params.id!)

const courseQuery = useCourseQuery(courseId)
const course = courseQuery.data

const tabIndex = ref(0)

function handleJoinClicked() {
  Taro.navigateTo({ url: `/pages/course-content/index?id=${courseId}` })
}
</script>

<template>
  <view class="h-100vh flex flex-col">
    <view class="flex-1 overflow-scroll">
      <img
        class="h-423 w-full"
        src="https://img-ph-mirror.nosdn.127.net/tYhzuDVilzlDOo2bEyH_Qg==/6608226511143817333.jpg"
      />
      <nut-tabs v-model="tabIndex">
        <nut-tabpane title="课程介绍">
          <view class="text-gray-9">
            <view>
              <view class="text-big-title font-medium">{{ course?.name }}</view>
              <view class="text-gray-5 flex justify-between mt-1">
                <view class="text-description">{{ course?.teacher }}</view>
                <view class="text-description">{{ course?.members }} 人参加</view>
              </view>
            </view>
            <view class="mt-4">
              <view class="text-small-title font-medium">课程介绍</view>
              <view class="mt-1 text-normal">
                {{ course?.profile }}
              </view>
            </view>
          </view>
        </nut-tabpane>
        <nut-tabpane title="评价 292"> Tab 2 </nut-tabpane>
      </nut-tabs>
    </view>
    <view class="w-full px-4 py-2 box-border bg-white border-t-2 border-gray-200">
      <nut-button class="w-full" type="primary" @click="handleJoinClicked">立即参加</nut-button>
    </view>
  </view>
</template>
