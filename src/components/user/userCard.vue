<script setup lang="ts">
const props = defineProps<{
  nickname: string
  avatar: string
  isLogin: boolean
}>()
</script>
<template>
  <view class="userCard">
    <nut-avatar size="75" icon="image" :url="props.avatar"> </nut-avatar>
    <text>{{ props.nickname }}</text>
    <nut-icon v-if="props.isLogin" name="right" size="18px" class="ml-15"></nut-icon>
  </view>
</template>

<style lang="scss">
.userCard {
  display: flex;
  width: 600px;
  height: 208px;
  align-items: center;
  z-index: 1;
  margin: 80px 0 0 0;

  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  font-weight: bold;

  .nut-avatar {
    margin: 0 30px 0 13px;
  }

  text {
    font-weight: 700 !important;
    font-size: 37px !important;
    line-height: 36px;
  }
}
</style>
