<script setup lang="ts">
import { computed } from 'vue'
import { useCounterStore } from '@/store'
import { View } from '@tarojs/components'

const counter = useCounterStore()
const count = computed(() => counter.count)

function handleIncrementClicked() {
  counter.count++
}
</script>

<template>
  <view class="index">
    {{ count }}
    <nut-button @click="handleIncrementClicked"> +1 </nut-button>
  </view>
</template>
