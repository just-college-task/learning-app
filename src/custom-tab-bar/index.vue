<template>
  <nut-tabbar size="18px" @tab-switch="tapSwitch">
    <nut-tabbar-item tab-title="首页" icon="home"></nut-tabbar-item>
    <nut-tabbar-item tab-title="课程" icon="category"></nut-tabbar-item>
    <nut-tabbar-item tab-title="我的" icon="my"></nut-tabbar-item>
  </nut-tabbar>
</template>

<style lang="scss">
@import '@nutui/nutui-taro/dist/packages/tabbar/index.scss';
@import '@nutui/nutui-taro/dist/packages/tabbaritem/index.scss';
@import '@nutui/nutui-taro/dist/styles/font/iconfont.css';
</style>

<script lang="ts">
import Taro from '@tarojs/taro'
import { ref } from 'vue';
export default {

  setup() {
    const pages = ref([
      '/pages/index/index',
      '/pages/courses/index',
      '/pages/my/index'
    ])
    function tapSwitch(item, index) {
      Taro.switchTab({
        url: pages.value[index]
      })
    }

    return {
      tapSwitch
    }
  }
}
</script>
