<script>
//setup lang="ts"
import { getQuestionList } from '@/api/question'

class QuestionSubmit {
  constructor(id, option) {
    this.id = id
    this.option = option
  }
}

export default {
  data() {
    return {
      editable: true, //是否可作答编辑
      data: null,
      radioVal: '',
      submit: [],
      state: {
        showBasic: false
      }
    }
  },
  methods: {
    nextPage() {
      if (this.data.last === false) {
        this.data.currentPage++
        this.loadQuestionList(this.data.dataList[0].questionCollectId, this.data.currentPage)
      }
    },
    beforePage() {
      if (this.data.first === false) {
        this.data.currentPage--
        this.loadQuestionList(this.data.dataList[0].questionCollectId, this.data.currentPage)
      }
    },
    radioChange(value) {
      //寻找是否有目标提交
      const currentQuestionId = this.data.dataList[0].id
      const resIndex = this.submit.findIndex(item => item.id === currentQuestionId)
      if (resIndex != -1) {
        //已经存在
        this.submit[resIndex].option = value
      } else {
        //不存在
        this.submit.push(new QuestionSubmit(currentQuestionId, value))
      }
      console.log(this.submit)
    },
    submitPaper() {
      console.log('提交', this.submit)
      this.state.showBasic = true
    },
    loadQuestionList(id, page) {
      getQuestionList(id, page, 1).then(res => {
        if (!res.dataList) return
        this.radioVal = '' //每次刷新一题则清空现在所选的答案
        this.data = res
        console.log('请求试题成功', this.data)
      })
    }
  },
  mounted() {
    this.loadQuestionList(36, 1)
  },
  onLoad() {},
  onReady() {},
  onShow() {},
  onHide() {},
  onPullDownRefresh() {}
}
</script>

<template>
  <!-- 弹出层 -->
  <nut-cell title="展示弹出层" is-link @click="state.showBasic = true"></nut-cell>
  <nut-popup
    pop-class="popclass"
    :style="{ padding: '50rpx 50rpx', borderRadius: '5rpx' }"
    v-model:visible="state.showBasic"
    :z-index="100"
  >
    <view>提交中</view>
  </nut-popup>

  <!-- 骨架屏 -->
  <nut-skeleton
    v-if="!data"
    width="250px"
    :style="{ padding: '1rem' }"
    height="100rpx"
    title
    animated
    row="3"
  >
  </nut-skeleton>

  <view v-if="data" class="question w-full h-100vh flex flex-col">
    <view class="flex justify-center p-3 border-b-gray-2 border-b-1">
      <view class="font-semibold text-lg"
        >题目 {{ data.currentPage }}/{{ data.totalPages }} 剩余时间:50分钟</view
      >
    </view>
    <view class="flex flex-col p-3">
      <view class="text-normal text-gray-9"
        >{{ data.currentPage }}. {{ data.dataList[0].content[0] }}</view
      >
      <!-- 单选 -->
      <nut-radiogroup v-model="radioVal" @change="radioChange" class="p-3" text-position="left">
        <nut-radio
          v-for="item in data.dataList[0].options"
          :disabled="!editable"
          :key="item.index"
          class="h-100 border-b-gray-2 border-b-1"
          :label="`${item.option}`"
          icon-active-name="checklist"
          icon-size="20"
        >
          {{ item.option }}.{{ item.content }}
        </nut-radio>
      </nut-radiogroup>
    </view>
    <view class="flex justify-around mt-auto p-4 px-6">
      <nut-button v-if="!data.first" @click="beforePage" plain type="primary">上一题</nut-button>
      <nut-button v-if="!data.last" @click="nextPage" type="primary">下一题</nut-button>
      <nut-button v-if="data.last" @click="submitPaper" type="success">提交</nut-button>
    </view>
  </view>
</template>

<style lang="scss">
.question {
  .nut-radio__label {
    font-size: 17px;
    line-height: 40px;
    color: rgba(0, 0, 0, 0.65);
  }
  .nut-button {
    width: 48%;
  }
}
</style>
