<script setup lang="ts">
import { ref } from 'vue'
import NoticesTabContent from './views/NoticesTabContent.vue'
import SectionsTabContent from './views/SectionsTabContent.vue'
import ExamsTabContent from './views/ExamsTabContent.vue'
import { useRouter } from '@tarojs/taro'
const activeTabIndex = ref(0)

const router = useRouter()
const courseId = Number(router.params.id!)
console.info('course-content', courseId)
</script>

<template>
  <view class="bg-primary flex flex-col min-h-screen course-content">
    <view class="h-248 box-border flex items-end px-5 py-3">
      <view>
        <view class="text-small-title font-bold text-white"> 英汉修辞对比赏析 </view>
        <view class="text-description text-gray-2 mt-1"> 京东科技组件库 </view>
      </view>
    </view>
    <view class="grow rounded-t-5 overflow-hidden flex flex-col">
      <nut-tabs v-model="activeTabIndex" class="grow flex flex-col">
        <nut-tabpane title="公告" class="left-0 absolute border-t-2 border-gray-2 bg-background">
          <NoticesTabContent />
        </nut-tabpane>
        <nut-tabpane title="章节列表" class="left-[100%] absolute border-t-2 border-gray-2">
          <SectionsTabContent />
        </nut-tabpane>
        <nut-tabpane
          title="试题"
          class="left-[200%] absolute border-t-2 border-gray-2 bg-background"
        >
          <ExamsTabContent />
        </nut-tabpane>
      </nut-tabs>
    </view>
  </view>
</template>

<style lang="scss">
.course-content {
  .nut-tabs__content {
    flex-grow: 1;
    position: relative;
    width: 100%;
  }
  .nut-tabs__titles-item__line {
    bottom: 0;
  }
}
</style>
