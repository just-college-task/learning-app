<script>
//setup lang="ts"
import { createSubmit, createSubmitItem, getData } from '@/pages/testing/mock'
import Taro from '@tarojs/taro'
import { getExamById } from '@/api/exam'

export default {
  data() {
    return {
      editable: true, //是否可作答编辑
      exam: null,
      radioVal: '',
      submit: null,
      state: {
        showBasic: false
      },
      last: false,
      first: true,
      currentPage: 0
    }
  },
  methods: {
    nextPageHandler() {
      this.loadQuestion(this.currentPage + 1)
      this.loadRadioVal()
    },
    beforePageHandler() {
      this.loadQuestion(this.currentPage - 1)
      this.loadRadioVal()
    },
    radioChangeHandler(value) {
      let res = this.checkCurrentSubmit()
      if (res.findRes != -1) {
        //已经存在
        this.submit.testList[res.findRes].answer = value
      } else {
        //不存在
        this.submit.testList.push(
          createSubmitItem(
            res.nowQuestionId,
            value,
            this.exam.questionList[this.currentPage].questionCollectId
          )
        )
      }
    },
    submitPaperHandler() {
      console.log('提交', this.submit)
      this.state.showBasic = true
    },
    loadRadioVal() {
      let res = this.checkCurrentSubmit()
      if (res.findRes != -1) {
        //已经存在
        this.radioVal = this.submit.testList[res.findRes].answer
      } else {
        this.radioVal = ''
      }
    },
    checkCurrentSubmit() {
      let nowQuestionId = this.exam.questionList[this.currentPage].id
      let findRes = this.submit.testList.findIndex(item => item.questionId === nowQuestionId)
      return { nowQuestionId, findRes }
    },
    loadQuestion(idx) {
      if (idx < 0 || idx >= this.exam.questionList.length) return
      this.currentPage = idx
      if (this.currentPage == 0) {
        this.first = true
        this.last = !this.first
      }
      if (this.currentPage === this.exam.questionList.length - 1) {
        this.first = false
        this.last = !this.first
      }
    }
  },
  created() {
    this.$instance = Taro.getCurrentInstance()
  },
  mounted() {
    //获取路由参数
    const params = this.$instance.router.params
    if (params.examId) {
      //获取考试信息->更新状态
    }
    getExamById(32)
      .then(res => {
        this.exam = res
        this.loadQuestion(0)
        this.submit = createSubmit(this.exam.id)
      })
      .catch(e => {
        console.error(e)
        this.exam = getData()
        this.loadQuestion(0)
        this.submit = createSubmit(this.exam.id)
      })
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
    :style="{ padding: '50rpx 50rpx', borderRadius: '15rpx' }"
    v-model:visible="state.showBasic"
    :z-index="100"
  >
    <view>提交中</view>
  </nut-popup>

  <!-- 骨架屏 -->
  <nut-skeleton
    v-if="!exam"
    width="250px"
    :style="{ padding: '1rem' }"
    height="100rpx"
    title
    animated
    row="3"
  >
  </nut-skeleton>

  <view v-if="exam" class="question w-full h-100vh flex flex-col">
    <view class="flex justify-center p-3 border-b-gray-2 border-b-1">
      <view class="font-semibold text-lg"
        >题目 {{ currentPage + 1 }}/{{ exam.questionList.length }}</view
      >
    </view>
    <view class="flex flex-col p-3">
      <view class="text-normal text-gray-9"
        >{{ currentPage + 1 }}. {{ exam.questionList[currentPage].content[0] }}</view
      >
      <!-- 单选 -->
      <nut-radiogroup
        v-model="radioVal"
        @change="radioChangeHandler"
        class="p-3"
        text-position="left"
      >
        <nut-radio
          v-for="item in exam.questionList[currentPage].options"
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
      <nut-button v-if="!first" @click="beforePageHandler" plain type="primary">上一题</nut-button>
      <nut-button v-if="!last" @click="nextPageHandler" type="primary">下一题</nut-button>
      <nut-button v-if="last" @click="submitPaperHandler" type="success">提交</nut-button>
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
