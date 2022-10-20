<script setup lang="ts">
import Card from './Card.vue'
import CourseItem from '@/components/CourseItem.vue'
</script>

<template>
  <Card title="我的课程" label="查看全部">
    <CourseItem>
      <view>
        <view class="text-gray-400 text-xs">已学 3/20 节</view>
        <nut-progress
          class="rounded overflow-hidden mt-1"
          percentage="30"
          :show-text="false"
          size="small"
        />
      </view>
    </CourseItem>
  </Card>
</template>
