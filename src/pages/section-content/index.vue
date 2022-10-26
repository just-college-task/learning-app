<script setup lang="ts">
function getIsActive(idx: number) {
  return idx === 1
}
</script>

<template>
  <view class="min-h-screen bg-background">
    <video
      class="h-423 w-full"
      id="video"
      src="https://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400"
      poster="https://img-ph-mirror.nosdn.127.net/tYhzuDVilzlDOo2bEyH_Qg==/6608226511143817333.jpg"
      :initial-time="0"
      :controls="true"
      :autoplay="false"
      :loop="false"
      :muted="false"
    />
    <view class="px-4 py-3 box-border">
      <view class="w-full bg-white rounded-lg px-4 py-3 box-border">
        <view class="text-normal text-gray-9">英汉修辞对比赏析</view>
        <view class="text-description mt-1 text-gray-4">共 22 个课时</view>
        <nut-divider class="text-gray-200 my-3" />
        <view class="w-full h-160 relative overflow-x-scroll">
          <view class="flex gap-3 absolute">
            <view
              v-for="i in 3"
              class="w-284 h-156 rounded-md relative bg-background"
              :class="{
                'border border-primary bg-white': getIsActive(i)
              }"
            >
              <view class="h-52 flex items-end">
                <nut-tag
                  :type="getIsActive(i) ? 'primary' : ''"
                  class="rounded-l-0 pr-2 rounded-r-full absolute"
                  :class="{ 'bg-gray-400 text-white': !getIsActive(i) }"
                  >视频</nut-tag
                >
              </view>
              <view
                class="mt-2 text-description px-2"
                :class="{
                  'text-primary font-semibold': getIsActive(i)
                }"
              >
                1. 排比、对偶与层进
              </view>
            </view>
          </view>
        </view>
      </view>
    </view>
    <view class="px-4 py-3 box-border">
      <view class="w-full bg-white rounded-lg px-4 py-3 box-border">
        <view class="mx-2 text-normal text-gray-9">章节笔记</view>
        <view class="flex border-b-gray-2 border-b-1 mx-1 pt-3 pb-4">
          <view class="px-5 py-2 rounded-full mx-1 text-primary text-sm bg-blue-2">我的</view>
          <view class="px-5 py-2 rounded-full mx-1 text-gray-5 text-sm bg-background"
            >其他学员</view
          >
        </view>
        <view class="w-full">
          <view v-for="i in 3" class="py-3 w-638 h-100 border-b-gray-2 border-b-1">
            <view class="text-lg px-1">这是一篇笔记</view>
            <view class="flex justify-between px-1 text-gray-4 text-sm">
              <view>Fronz</view>
              <view>2022-10-24</view>
            </view>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>
