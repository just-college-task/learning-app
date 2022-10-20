<script setup lang="ts">
import { ref } from 'vue'
import { View } from '@tarojs/components'

const page = ref(2)
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
      <view class="my-card">
        <view class="header">
          <text class="title">我的课程</text><text class="label">查看全部</text>
        </view>
        <view class="body">
          <view class="course-item">
            <img
              src="https://img-ph-mirror.nosdn.127.net/tYhzuDVilzlDOo2bEyH_Qg==/6608226511143817333.jpg?imageView&quality=100&thumbnail=230y130"
            />
            <view class="info-wrapper">
              <view class="info">
                <text class="name"> 程序设计入门——C语言 </text>
                <text class="teacher"> 浙江大学 </text>
              </view>
              <view class="progress">
                <text class="text">已学 3/20 节</text>
                <nut-progress percentage="30" :show-text="false" size="small" />
              </view>
            </view>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<style lang="scss">
.main {
  padding: 0 12px;
}

.my-card {
  box-sizing: border-box;
  margin-top: 12px;
  width: 100%;
  background: white;
  padding: 12px 16px 20px;
  border-radius: 8px;
  box-shadow: 0px 2px 118px rgba(0, 0, 0, 0.03);

  .header {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;

    .title {
      color: $color-text-base;
    }

    .label {
      color: $color-text-label;
      font-size: 10px;
    }
  }
  .body {
    padding-top: 12px;
  }
}

.course-item {
  display: flex;
  gap: 12px;

  .progress {
    .text {
      color: $color-text-label;
      font-size: $size-text-label;
      line-height: 20px;
    }

    .nut-progress {
      border-radius: 4px;
      overflow: hidden;
    }
  }

  .h5-img {
    height: 72px;
    width: 120px;
    object-fit: cover;
  }

  .info-wrapper {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .info {
    display: flex;
    flex-direction: column;
    gap: 4px;

    .name {
      font-size: $size-text-base;
    }

    .teacher {
      font-size: $size-text-caption;
      color: $color-text-caption;
    }
  }
}
</style>
