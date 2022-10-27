<script setup lang="ts">
import { Router } from 'tarojs-router-next'

interface MenuItem {
  title: string
  iconName: string
  action: (...args: any) => any
}

const menuItems: MenuItem[] = [
  {
    title: '我的课程',
    iconName: 'message',
    action: () => Router.toMyCourses()
  },
  {
    title: '我管理的课程',
    iconName: 'people',
    action: () => Router.toMyManageCourses()
  },
  {
    title: '我的证书',
    iconName: 'success',
    action: () => Router.toMyCertificates()
  }
]
</script>

<template>
  <view class="body flex flex-col justify-center w-580px bg-white mt-45px px-5 rounded-24px">
    <view
      v-for="item in menuItems"
      class="flex w-full h-104px justify-center items-center"
      @click="item.action"
    >
      <nut-icon :name="item.iconName" size="20" class="mr-32px"></nut-icon>
      <view class="flex w-full h-full items-center justify-between border-b-1 border-b-gray-2">
        <text>{{ item.title }}</text>
        <view class="arr"></view>
      </view>
    </view>
  </view>
</template>
