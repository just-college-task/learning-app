<script>
const getData = () => {
  return {
    collectionId: 100,
    score: 90,
    list: [
      { status: 'error' },
      { status: 'no' },
      { status: 'yes' },
      { status: 'yes' },
      { status: 'no' },
      { status: 'yes' },
      { status: 'error' },
      { status: 'error' },
      { status: 'error' },
      { status: 'no' },
      { status: 'yes' },
      { status: 'yes' },
      { status: 'error' },
      { status: 'no' },
      { status: 'yes' },
      { status: 'yes' },
      { status: 'no' },
      { status: 'yes' },
      { status: 'error' },
      { status: 'error' },
      { status: 'error' },
      { status: 'no' },
      { status: 'yes' },
      { status: 'yes' },
      { status: 'error' },
      { status: 'no' },
      { status: 'yes' },
      { status: 'yes' },
      { status: 'no' },
      { status: 'yes' },
      { status: 'error' },
      { status: 'error' },
      { status: 'error' },
      { status: 'no' },
      { status: 'yes' },
      { status: 'yes' }
    ]
  }
}

export default {
  data() {
    return {
      color: {
        error: '#EF4444',
        no: '#ebe712',
        yes: '#2C68FF'
      },
      score: 0,
      list: []
    }
  },
  methods: {
    questionClick(e) {
      console.log(e)
    },
    lookPaper(e) {
      console.log('查看试卷')
    }
  },
  mounted() {
    this.list = getData().list
    this.score = getData().score
  },
  onLoad() {},
  onReady() {},
  onShow() {},
  onHide() {},
  onPullDownRefresh() {}
}
</script>

<template>
  <view class="exams-result">
    <view class="flex bg-white justify-center p-3 border-b-gray-2 border-b-1">
      <view class="font-semibold text-lg">答题结果</view>
    </view>
    <!-- 得分展示 -->
    <view class="score-area bg-white">
      <view>
        <view class="score-text text-center">得分</view>
        <view class="score-value text-center text-blue-700 text-size-60">{{ score }}</view>
      </view>
    </view>

    <!-- 我的作答 -->
    <view class="mt-2 pl-2 pr-2 box-border">
      <view class="w-full flex flew-wrap justify-between">
        <view class="text-30 text-gray-900">我的作答</view>
        <view class="flex justify-end">
          <view class="notice-block">
            <nut-icon size="16" name="mask-close" :color="color.yes" />
            <view class="ml-1 mr-1 color-grey-400">正确</view>
          </view>

          <view class="notice-block">
            <nut-icon size="16" name="mask-close" :color="color.error" />
            <view class="ml-1 mr-1">错误</view>
          </view>

          <view class="notice-block">
            <nut-icon size="16" name="mask-close" :color="color.no" />
            <view class="ml-1 mr-1">未答</view>
          </view>
        </view>
      </view>
      <!-- 题目圆点 -->
      <nut-grid :column-num="4" class="mt-4" border="false" :gutter="10" square>
        <nut-grid-item
          v-for="(item, index) in list"
          v-bind:key="index"
          clickab="true"
          @click="questionClick(index)"
        >
          <view class="question-dot font-bold" :style="`background-color:${color[item.status]};`">
            {{ index }}
          </view>
        </nut-grid-item>
      </nut-grid>
    </view>

    <!-- 操控区域 -->
    <view class="flex justify-between mt-auto p-4 px-6">
      <nut-button @click="lookPaper" block type="primary">查看试卷</nut-button>
    </view>
  </view>
</template>
<style lang="scss">
.exams-result {
  background-color: #f8f8f8;
  .score-area {
    height: 300rpx;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }
  .score-text {
    width: 100%;
    font-size: 0.8rem;
    color: #6b7280;
  }
  .score-value {
    width: 100%;
  }
  .notice-block {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .question-dot {
    width: 80rpx;
    height: 80rpx;
    border-radius: 40rpx;
    font-size: 30rpx;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #ffffff;
  }
}
</style>
