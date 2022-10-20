<script setup lang="ts">
import Taro from '@tarojs/taro'
import { useUserStore } from '@/store'
import { computed } from 'vue'

const userStore = useUserStore()
const isLoginRef = computed(() => userStore.isLogin)

function handleClick() {
  if (!isLoginRef.value) {
    Taro.navigateTo({
      url: '/pages/my/login'
    })
  }
}
</script>

<template>
  <view class="my">
    <view class="back-curves"></view>
    <view class="userCard" @click="handleClick">
      <nut-avatar size="80" icon="image"> </nut-avatar>
      <text>请登入/注册</text>
    </view>
  </view>
</template>

<style lang="scss">
.my {
  display: flex;
  justify-content: center;

  .back-curves {
    width: 100%;
    height: 170px;
    position: absolute;
    z-index: -1;
    border-radius: 10% 10% 50% 50% / 0% 0% 35% 35%;
    background-color: #2c68ff;
  }

  .userCard {
    display: flex;
    width: 350px;
    height: 138px;
    align-items: center;
    z-index: 1;
    margin: 40px 0 0 0;

    background: #ffffff;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    font-weight: bold;

    .nut-avatar {
      margin: 0 31px 0 13px;
    }
  }
}
</style>
