<script setup lang="ts">
import Taro from '@tarojs/taro'
import QuesCollectTabContent from './QuesCollectTabContent.vue'
import { ref } from 'vue'

const props = defineProps<{
  courseId: number
}>()
console.info(props.courseId)

function handleClicked() {
  Taro.navigateTo({ url: '/pages/testing/index' })
}

const subTabs = [
  {
    title: '测试',
    paneKey: 'exam'
  },
  {
    title: '试题集',
    paneKey: 'ques'
  }
]
const activeSubTab = ref(subTabs[0].paneKey)
</script>

<template>
  <nut-tabs class="exam-sub-tabs mt-4 bg-background" v-model="activeSubTab">
    <template v-slot:titles>
      <view
        v-for="item in subTabs"
        @click="activeSubTab = item.paneKey"
        :class="{ active: activeSubTab == item.paneKey }"
      >
        <view class="text-small-normal bg-white rounded-full mr-2 border border-gray-2"
          ><view
            class="px-3 py-1 rounded-full"
            :class="{ 'bg-blue-50 text-primary': activeSubTab == item.paneKey }"
          >
            {{ item.title }}
          </view></view
        >
      </view>
    </template>
    <nut-tabpane v-for="item in subTabs" :pane-key="item.paneKey" class="bg-transparent py-3">
      <view v-if="activeSubTab === 'exam'">
        <view class="w-full bg-white rounded-lg px-4 py-3 box-border">
          <view>
            <view class="text-normal text-gray-9">考试</view>
            <view class="text-description mt-1 text-gray-4">截止时间：2022-10-20</view>
            <nut-divider class="text-gray-200 my-3" />
            <view class="flex justify-between">
              <view class="text-description text-gray-9">总分：100</view>
              <nut-button size="mini" type="primary" plain @click="handleClicked"
                >进入测试</nut-button
              >
            </view>
          </view>
        </view>
      </view>
      <view v-else-if="activeSubTab === 'ques'">
        <ques-collect-tab-content />
      </view>
    </nut-tabpane>
  </nut-tabs>
</template>

<style lang="scss">
.exam-sub-tabs {
  .nut-tabs__titles {
    padding: 0 18px;
    height: auto !important;
    background: transparent;
  }
}
</style>
