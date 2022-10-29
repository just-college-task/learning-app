<script setup lang="ts">
import { ref, provide } from 'vue'
import NoticesTabContent from './views/NoticesTabContent.vue'
import SectionsTabContent from './views/SectionsTabContent.vue'
import ExamsTabContent from './views/ExamsTabContent.vue'
import { useRouter } from '@tarojs/taro'
import { useCourseQuery } from '@/composables/courses'
import { ACTIVE_SHEET_PROVIDE_KEY } from '@/definitions'

const activeTabIndex = ref(0)

const router = useRouter()
const courseId = Number(router.params.id!)

const courseQuery = useCourseQuery(courseId)
const course = courseQuery.data

const activeSheetVisible = ref(false)
const menuItems = ref([
  {
    name: '选项一'
  },
  {
    name: '选项二'
  },
  {
    name: '选项三'
  }
])

provide(ACTIVE_SHEET_PROVIDE_KEY, {
  setMenuItems: value => {
    menuItems.value = value
  },
  open: () => (activeSheetVisible.value = true)
})
</script>

<template>
  <nut-actionsheet v-model:visible="activeSheetVisible" :menu-items="menuItems" cancel-txt="取消" />
  <view class="bg-primary flex flex-col min-h-screen course-content">
    <view class="h-248 box-border flex items-end px-5 py-3">
      <view>
        <view class="text-small-title font-bold text-white">{{ course?.name }}</view>
        <view class="text-description text-gray-2 mt-1">{{ course?.teacher }}</view>
      </view>
    </view>
    <view class="grow rounded-t-5 overflow-hidden flex flex-col">
      <nut-tabs v-model="activeTabIndex" class="grow flex flex-col">
        <nut-tabpane title="公告" class="left-0 absolute border-t-2 border-gray-2 bg-background">
          <NoticesTabContent :courseId="courseId" />
        </nut-tabpane>
        <nut-tabpane title="章节列表" class="left-[100%] absolute border-t-2 border-gray-2">
          <SectionsTabContent :courseId="courseId" />
        </nut-tabpane>
        <nut-tabpane
          title="试题"
          class="left-[200%] absolute border-t-2 border-gray-2 bg-background p-0"
        >
          <ExamsTabContent :courseId="courseId" />
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
