<script setup lang="ts">
import Taro from '@tarojs/taro'

function handleJoinClicked() {
  Taro.navigateTo({ url: '/pages/course-content/index' })
}
</script>

<template>
  <view class="h-100vh flex flex-col">
    <view class="flex-1 overflow-scroll">
      <img
        class="h-423 w-full"
        src="https://img-ph-mirror.nosdn.127.net/tYhzuDVilzlDOo2bEyH_Qg==/6608226511143817333.jpg"
      />
      <nut-tabs>
        <nut-tabpane title="课程介绍"
          ><view class="text-gray-9">
            <view>
              <view class="text-big-title font-medium"> 程序设计入门——C语言</view>
              <view class="text-gray-5 flex justify-between mt-1">
                <view class="text-description">浙江大学</view>
                <view class="text-description">111 人参加</view>
              </view>
            </view>
            <view class="mt-4">
              <view class="text-small-title font-medium">课程介绍</view>
              <view class="mt-1 text-normal">
                “英汉修辞对比赏析”这门课的定位设计是大学生文化素质教育课。该课程面向广大学生，要求学习者具有一定的英语基础。本门课程的适用人群还包括对修辞策略、语言对比、汉英翻译、韵律等领域感兴趣的爱好者和学习者。“英汉修辞对比赏析”教学内容包括以下四个板块：声音层面上的修辞策略英汉对比赏析、句法层面上的修辞策略英汉对比赏析、词汇层面上的修辞策略英汉对比赏析和传统修辞格的英汉对比赏析。这门课的目标有以下几点。一是引导学习者体会、感悟汉英两种语言的美，懂得如何从修辞策略的角度去欣赏语言，通过语言去发现美，感受美，创造美。这一目标主要是培养学习者对美的领会、感悟和创造，从而达到人文素质培养的要求。二是通过英汉语修辞策略的对比分析和描写，帮助汉语学习者更好地了解中华文化，了解汉字、汉语、中华文化的美；帮助学习者提升英语水平，提高对英文经典作品的赏析能力，深入了解英语国家的历史和文化，帮助英汉两种语言的使用者更好地进行文化交际，进行更深层次的文化交流。三是在国家“一带一路”建设框架下，培养、提升广大语言使用者的修辞意识和修辞能力，提升大家运用、驾驭语言的能力，从而培养更多的懂得如何讲好中国故事的全方位人才，培养更多的能够讲好中国故事，能够真正为民心相通建设做出贡献的国际型复合人才。让我们一起踏上英汉修辞对比赏析之旅，共同感受修辞语言的无穷魅力！
              </view>
            </view>
          </view></nut-tabpane
        >
        <nut-tabpane title="评价 292"> Tab 2 </nut-tabpane>
      </nut-tabs>
    </view>
    <view class="w-full px-4 py-2 box-border bg-white border-t-2 border-gray-200">
      <nut-button class="w-full" type="primary" @click="handleJoinClicked">立即参加</nut-button>
    </view>
  </view>
</template>
