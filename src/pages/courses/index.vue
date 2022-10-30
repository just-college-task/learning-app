<script setup lang="ts">
import { useUserStore } from '@/store'
import { computed } from 'vue'
import Router from 'tarojs-router-next'
import MyCoursesCard from '@/components/card/MyCoursesCard.vue'

const userStore = useUserStore()
const isLogin = computed(() => userStore.isLogin)
</script>

<template>
  <view class="page-wrapper tab-page-wrapper"
    ><view v-if="!isLogin" class="w-full h-full grid place-content-center"
      ><nut-button @click="Router.toLogin">登录</nut-button>
    </view>
    <view v-else class="px-4">
      <my-courses-card />
    </view>
  </view>
</template>
