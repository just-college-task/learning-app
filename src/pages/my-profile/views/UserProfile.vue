<script setup lang="ts">
import { reactive, ref } from 'vue'

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
const nameLengthValidator = (val: string) => val?.length >= 2
// 失去焦点校验
const customBlurValidate = (prop: string) => {
  ruleForm.value.validate(prop).then(({ valid, errors }: any) => {
    if (valid) {
      console.log('success', formData)
    } else {
      console.log('error submit!!', errors)
    }
  })
}

//submit
const submit = () => {
  ruleForm.value.validate().then(({ valid, errors }: any) => {
    if (valid) {
      console.log('success', formData)
    } else {
      console.log('error submit!!', errors)
    }
  })
}
</script>

<template>
  <nut-form
    :model-value="formData"
    :rules="{
      name: [
        {
          message: '用户名至少两个字符',
          validator: nameLengthValidator
        }
      ]
    }"
    ref="ruleForm"
  >
    <nut-form-item
      label="用户名"
      prop="nickname"
      required
      :rules="[{ required: true, message: '请填写用户名' }]"
    >
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
      :rules="[
        // { required: true, message: '请填写手机号' },
        { validator: customValidator, message: '必须输入数字' }
      ]"
    >
      <input
        class="nut-input-text"
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
