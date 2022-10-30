<script setup lang="ts">
import Card from './Card.vue'
import CertificationItem from '@/components/CertificationItem.vue'
import useListQueryContainer from '@/composables/useListQueryContainer'
import { useJoinedCoursesQuery } from '@/composables/courses'

const ListQueryContainer = useListQueryContainer(useJoinedCoursesQuery())
</script>

<template>
  <Card title="我的证书">
    <list-query-container v-slot="{ list }">
      <CertificationItem v-for="course in list" :course="course">
        <view v-if="course.totalPart === course.learnedPart">
          <view class="text-gray-400 text-xs">已学 3/20 节</view>
          <nut-progress
            class="rounded overflow-hidden mt-1"
            percentage="30"
            :show-text="false"
            size="small"
          />
        </view> </CertificationItem
    ></list-query-container>
  </Card>
</template>
