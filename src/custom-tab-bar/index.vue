<script setup lang="ts">
import Taro from '@tarojs/taro'
import { computed } from 'vue'
import { tabs } from '@/definitions'
import { useTabStore } from '@/store'

const tabStore = useTabStore()
const activeNameRef = computed(() => tabStore.activeName)

function handleTabSwitch(e: any) {
  tabStore.setActiveName(e.name)
  Taro.switchTab({ url: `/${e.name}` })
}
</script>

<template>
  <nut-tabbar @tab-switch="handleTabSwitch" :visible="activeNameRef">
    <nut-tabbar-item
      v-for="tab in tabs"
      :name="tab.pagePath"
      :key="tab.pagePath"
      :tab-title="tab.text"
      :icon="tab.iconName"
    ></nut-tabbar-item>
  </nut-tabbar>
</template>

<style lang="scss">
@import '@nutui/nutui-taro/dist/packages/tabbar/index.scss';
@import '@nutui/nutui-taro/dist/packages/tabbaritem/index.scss';
@import '@nutui/nutui-taro/dist/styles/font/iconfont.css';

.nut-tabbar {
  height: 56px;

  .nut-tabbar-item_icon-box_nav-word {
    margin-top: 6px;
    line-height: 14px;
  }
}
</style>
