<script setup lang="ts">
import { reactive, ref } from 'vue'
import { updateInfo } from '@/api/user'
import Taro from '@tarojs/taro'

const formData = reactive({
  nickname: '',
  phoneNumber: ''
})
const ruleForm = ref<any>(null)
//validate phone number
const customValidator = (val: string) => {
  if (val.length > 0) {
    return /^\d+$/.test(val)
  } else {
    return true
  }
}
//validate nickname
const nameLengthValidator = (val: string) => (val?.length > 0 ? val?.length >= 2 : true)
// 失去焦点校验
const customBlurValidate = (prop: string) => {
  ruleForm.value.validate(prop)
}

//submit
const submit = () => {
  ruleForm.value.validate().then(({ valid }: any) => {
    if (!formData.nickname && !formData.phoneNumber) {
      Taro.showToast({
        title: '表单为空',
        icon: 'error'
      })
      throw new Error('formData empty')
    }
    //valid form
    if (valid) {
      console.log('valid success:', formData)
      updateInfo({
        nickname: formData.nickname,
        phoneNumber: formData.phoneNumber
      }).then(() => {
        Taro.showToast({
          title: '更新成功',
          icon: 'success'
        })
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
</script>

<template>
  <nut-form
    :model-value="formData"
    :rules="{
      nickname: [
        {
          message: '用户名至少两个字符',
          validator: nameLengthValidator
        }
      ],
      phoneNumber: [{ validator: customValidator, message: '必须输入数字' }]
    }"
    ref="ruleForm"
  >
    <nut-form-item label="用户名" prop="nickname">
      <input
        class="nut-input-text"
        @blur="customBlurValidate('nickname')"
        v-model="formData.nickname"
        placeholder="请输入用户名"
        type="text"
      />
    </nut-form-item>
    <nut-form-item
      label="手机号"
      prop="phoneNumber"
      :rules="[{ validator: customValidator, message: '必须输入数字' }]"
    >
      <input
        class="nut-input-text"
        @blur="customBlurValidate('phoneNumber')"
        v-model="formData.phoneNumber"
        placeholder="请输入手机号"
        type="text"
      />
    </nut-form-item>
    <nut-cell>
      <nut-button type="primary" size="small" style="margin-right: 10px" @click="submit"
        >提交</nut-button
      >
    </nut-cell>
  </nut-form>
</template>
