<script setup lang="ts">
import { STORAGE_TOKEN_KEY } from '@/definitions'
import Taro from '@tarojs/taro'
const props = defineProps<{
  uploadUrl: string
}>()
const token = Taro.getStorageSync(STORAGE_TOKEN_KEY)
const uploadHeaders = {
  Authorization: 'Bearer ' + token
}
</script>

<template>
  <view class="back-curves w-full h-30vh absolute"> </view>
  <view
    class="uploader flex justify-center items-center w-685 h-236 bg-white shadow-sm rounded-24px z-1 py-3 mt-10"
  >
    <nut-uploader
      size="95"
      name="avatar"
      :maximum="1"
      :headers="uploadHeaders"
      :url="props.uploadUrl ? props.uploadUrl : ''"
    ></nut-uploader>
  </view>
</template>

<style lang="scss">
.back-curves {
  position: absolute;
  transform: scale(1.1);
  background: center top url('../../../../public/static/img/userBg.png');
  background-size: contain;
  background-repeat: no-repeat;
}
.uploader {
  .nut-uploader__upload {
    border-radius: 9999rpx;
  }
  .nut-uploader__preview {
    box-shadow: none !important;
  }
  .nut-uploader__preview__progress {
    border-radius: 9999rpx;
  }
  image {
    border-radius: 9999rpx !important;
  }
  text {
    font-size: large;
  }
}
</style>
