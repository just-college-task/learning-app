<script setup lang="ts">
import { Comment } from 'types/api'
import { ref } from 'vue'

const props = defineProps<{
  courseId: number
}>()

const comments = ref<Comment[]>([])
</script>

<template>
  <view>
    <view v-for="comment in comments">
      {{ comment.id }}
    </view>
  </view>
</template>
