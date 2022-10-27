<script setup lang="ts">
import { ref } from 'vue'
import PopularCoursesCard from '@/components/card/PopularCoursesCard.vue'
import { useBannersQuery } from '@/composables/banner'

const pageNum = ref(0)
const { data: banners } = useBannersQuery()
</script>

<template>
  <view class="page-wrapper index-page tab-page-wrapper">
    <nut-swiper
      :init-page="pageNum"
      :pagination-visible="true"
      pagination-color="#426543"
      auto-play="3000"
    >
      <nut-swiper-item v-for="banner in banners">
        <img :src="banner.picLink" alt="" />
      </nut-swiper-item>
    </nut-swiper>
    <view class="px-4">
      <PopularCoursesCard />
    </view>
  </view>
</template>

<style lang="scss">
.main {
  padding: 0 12px;
}
</style>
