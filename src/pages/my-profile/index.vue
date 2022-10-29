<script setup lang="ts">
import AvatarCardVue from './views/AvatarCard.vue'
import UserProfile from './views/UserProfile.vue'

const uploadUrl = process.env.API_HOST + '/auth/avatar'
</script>

<template>
  <view class="page-wrapper form-page-wrapper flex flex-col items-center">
    <view class="header flex justify-center w-full">
      <AvatarCardVue :uploadUrl="uploadUrl" />
    </view>
    <view class="profileForm flex justify-center w-685 h-full my-5 bg-white shadow-sm rounded-24px">
      <UserProfile />
    </view>
  </view>
</template>
