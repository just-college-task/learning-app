<script setup lang="ts">
import { ref } from 'vue'

const rateValue = ref(4)
</script>

<template>
  <view>
    <view class="flex items-center justify-between">
      <view class="flex">
        <nut-avatar size="44" icon="https://placekitten.com/200/200"></nut-avatar>
        <view class="ml-3">
          <view class="text-normal">一个普通的用户</view>
          <view class="text-description text-gray-400">2022-10-26</view>
        </view>
      </view>
      <nut-rate spacing="8" active-color="#FFC800" v-model="rateValue" />
    </view>
    <view class="text-normal mt-2">
      滚滚长江东逝水，浪花淘尽英雄。是非成败转头空。青山依旧在，几度夕阳红。白发渔樵江渚上，惯看秋月春风。一壶浊酒喜相逢。古今多少事，都付笑谈中。
    </view>
  </view>
</template>
