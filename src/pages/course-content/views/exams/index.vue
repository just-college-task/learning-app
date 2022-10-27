<script>
//setup lang="ts"
const checkPage = (now, count, tag) => {
  if (tag === 'before') {
    return now > 0
  } else if (tag === 'next') {
    return now < count - 1
  }
  return false
}

const getCollection = () => {
  return {
    id: 1,
    questionList: [
      {
        text: '1. 大学生适应新的学习、生活环境，很重要的一点就是_____',
        radios: [
          { name: 'A', text: `what's computer` },
          { name: 'B', text: `what's phone` },
          { name: 'C', text: `what's game` }
        ],
        radioVal: ''
      },
      {
        text: '2. 大学生适应新的学习、生活环境，很重要的一点就是_____',
        radios: [
          { name: 'A', text: `what's computer` },
          { name: 'B', text: `what's phone` },
          { name: 'C', text: `what's game` },
          { name: 'D', text: `what's app` }
        ],
        radioVal: ''
      },
      {
        text: '3. 大学生适应新的学习、生活环境，很重要的一点就是_____',
        radios: [
          { name: 'A', text: `what's computer` },
          { name: 'B', text: `what's phone` },
          { name: 'C', text: `what's game` },
          { name: 'D', text: `what's app` }
        ],
        radioVal: ''
      },
      {
        text: '4. 大学生适应新的学习、生活环境，很重要的一点就是_____',
        radios: [
          { name: 'A', text: `what's computer` },
          { name: 'B', text: `what's phone` }
        ],
        radioVal: ''
      }
    ]
  }
}

export default {
  data() {
    return {
      radioVal: '',
      pageNow: 0,
      collection: { id: 0, questionList: [] },
      submit: [],
      radioShow: false, //题目是否展示
      nextButtonShow: true, //下一题按钮是否展示
      submitButtonShow: false //提交是否展示
    }
  },
  methods: {
    nextPage() {
      if (checkPage(this.pageNow, this.collection.questionList.length, 'next')) {
        this.radioVal = ''
        this.pageNow++
      }
      //判断是否展示提交按钮
      this.buttonRenderControll()
    },
    beforePage() {
      if (checkPage(this.pageNow, this.collection.questionList.length, 'before')) {
        this.radioVal = ''
        this.pageNow--
      }
      //判断是否展示提交按钮
      this.buttonRenderControll()
    },
    buttonRenderControll() {
      if (this.pageNow === this.collection.questionList.length - 1) {
        this.nextButtonShow = false
        this.submitButtonShow = true
      } else {
        this.nextButtonShow = true
        this.submitButtonShow = false
      }
    },
    radioChange(value) {
      console.log(this.collection)
    },
    submitPaper() {
      //检查作答情况
      console.log(this.collection)
    }
  },
  mounted() {
    this.collection = getCollection() //mock
    this.radioShow = true
    this.buttonRenderControll()
  },
  onLoad() {},
  onReady() {},
  onShow() {},
  onHide() {},
  onPullDownRefresh() {}
}
</script>

<template>
  <view class="question w-full h-100vh flex flex-col">
    <view class="flex justify-center p-3 border-b-gray-2 border-b-1">
      <view class="font-semibold text-lg"
        >题目 {{ pageNow + 1 }}/{{ collection.questionList.length }}</view
      >
    </view>
    <view v-if="radioShow" class="flex flex-col p-3">
      <view class="text-normal text-gray-9">{{ collection.questionList[pageNow].text }}</view>
      <!-- 单选 -->
      <nut-radiogroup
        v-model="collection.questionList[pageNow].radioVal"
        @change="radioChange"
        class="p-3"
        text-position="left"
      >
        <nut-radio
          v-for="(item, index) in collection.questionList[pageNow].radios"
          :key="item.index"
          class="h-100 border-b-gray-2 border-b-1"
          :label="`${index}`"
          icon-active-name="checklist"
          icon-size="20"
        >
          {{ item.name }}.{{ item.text }}
        </nut-radio>
      </nut-radiogroup>
    </view>
    <view class="flex justify-between mt-auto p-4 px-6">
      <nut-button @click="beforePage" plain type="primary">上一题</nut-button>
      <nut-button v-if="nextButtonShow" @click="nextPage" type="primary">下一题</nut-button>
      <nut-button v-if="submitButtonShow" @click="submitPaper" type="success">提交</nut-button>
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
