<script setup lang="ts">
import Taro from '@tarojs/taro'
import Router from 'tarojs-router-next'
import { reactive, ref } from 'vue'
import { register } from '@/api/user'

Taro.setNavigationBarTitle({ title: '注册' })

const userData = reactive({
  phoneNumber: '',
  password: ''
})
const ruleForm = ref<any>(null)

function registerUser() {
  ruleForm.value.validate().then(({ valid }: any) => {
    if (!userData.phoneNumber || !userData.password) {
      Taro.showToast({
        title: '数据为空',
        icon: 'error'
      })
      throw new Error('userData empty')
    }
    //valid form
    if (valid) {
      register({
        phoneNumber: userData.phoneNumber,
        password: userData.password
      }).then(res => {
        if (res) {
          Taro.showToast({
            title: '注册成功',
            icon: 'success'
          })
          setTimeout(() => {
            Router.toLogin()
          }, 1000)
        }
      })
    } else {
      Taro.showToast({
        title: '格式错误',
        icon: 'error'
      })
      throw new Error('valid error')
    }
  })
}

//validate phoneNumber
const customValidator = (val: string) => {
  return /^\d+$/.test(val)
}
//validate phoneNumber
const pwdValidator = (val: string) => {
  return val.length >= 8
}
// 失去焦点校验
const customBlurValidate = (prop: string) => {
  ruleForm.value.validate(prop)
}
</script>

<template>
  <view class="main page-wrapper h-100vh flex flex-col items-center">
    <view class="bg w-full h-40vh mt-8"></view>
    <text class="w-200 text-xl my-2 font-semibold text-center">注册账号</text>
    <view class="userForm mx-15">
      <nut-form
        :model-value="userData"
        :rules="{
          phoneNumber: [{ validator: customValidator, message: '必须输入数字' }],
          password: [{ validator: pwdValidator, message: '密码长度需大于8位' }]
        }"
        ref="ruleForm"
      >
        <nut-form-item
          prop="phoneNumber"
          :rules="[{ validator: customValidator, message: '必须输入数字' }]"
        >
          <input
            class="nut-input-text"
            @blur="customBlurValidate('phoneNumber')"
            v-model="userData.phoneNumber"
            placeholder="手机号"
            type="text"
          />
        </nut-form-item>
        <nut-form-item
          prop="password"
          :rules="[{ validator: pwdValidator, message: '密码长度需大于8位' }]"
        >
          <input
            class="nut-input-text"
            @blur="customBlurValidate('password')"
            v-model="userData.password"
            placeholder="密码"
            type="safe-password"
          />
        </nut-form-item>
      </nut-form>
      <view class="w-full flex justify-end">
        <view class="text-sm" @click="() => Router.toLogin()">已有账号,去登录</view>
      </view>
      <nut-button type="primary" @click="registerUser">注册</nut-button>
    </view>
  </view>
</template>

<style lang="scss">
.main {
  .bg {
    transform: scale(1.1);
    background: center url('../../../public/static/img/bg.png');
    background-repeat: no-repeat;
  }

  .userForm {
    .nut-cell-group__warp {
      border-radius: 10px !important;
    }
    .nut-form-item__body__slots {
      input {
        text-align: left;
      }
    }
    .nut-button {
      margin-top: 10px;
      width: 252px;
      height: 35px;
    }
  }
}
</style>
