<script setup lang="ts">
import { ref } from 'vue'
import MyCoursesCard from '@/components/card/MyCoursesCard.vue'
import PopularCoursesCard from '@/components/card/PopularCoursesCard.vue'
// import Taro, { useReady } from '@tarojs/taro'

const page = ref(2)

// useReady(() => {
//   Taro.navigateTo({ url: `/pages/section-content/index` })
// })
</script>

<template>
  <view class="page-wrapper index-page">
    <nut-swiper
      :init-page="page"
      :pagination-visible="true"
      pagination-color="#426543"
      auto-play="3000"
    >
      <nut-swiper-item>
        <img src="https://storage.360buyimg.com/jdc-article/NutUItaro34.jpg" alt="" />
      </nut-swiper-item>
      <nut-swiper-item>
        <img src="https://storage.360buyimg.com/jdc-article/welcomenutui.jpg" alt="" />
      </nut-swiper-item>
      <nut-swiper-item>
        <img src="https://storage.360buyimg.com/jdc-article/fristfabu.jpg" alt="" />
      </nut-swiper-item>
    </nut-swiper>
    <view class="main">
      <MyCoursesCard />
      <PopularCoursesCard />
    </view>
  </view>
</template>

<style lang="scss">
.main {
  padding: 0 12px;
}
</style>
