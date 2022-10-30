<script setup lang="ts">
import MyManagedCourses from '@/components/card/MyManagedCourses.vue'
import FloatAddButton from '@/components/FloatAddButton.vue'
import Router from 'tarojs-router-next'
</script>

<template>
  <view class="page-wrapper w-full h-100vh">
    <view class="mx-3 overflow-y-scroll">
      <my-managed-courses />
    </view>
  </view>
  <float-add-button @click="Router.toNewCourse" />
</template>
