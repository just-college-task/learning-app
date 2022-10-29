import Taro, { RequestParams } from '@tarojs/taro'
import type { Response } from '../../types/api'
import { STORAGE_TOKEN_KEY } from '@/definitions'
const apiConfig = {
  baseUrl: process.env.API_HOST
}

//interceptor
const interceptor = function (chain: any) {
  const requestParams = chain.requestParams
  // const { method, data, url } = requestParams
  const token = Taro.getStorageSync(STORAGE_TOKEN_KEY) //get token from Taro Storage
  if (token) {
    requestParams.header = {
      ...requestParams.header,
      Authorization: 'Bearer ' + token
    }
  }

  return chain.proceed(requestParams).then(res => {
    return res
  })
}

//add interceptor
Taro.addInterceptor(interceptor)

//request
const request = async <T>(
  method: RequestParams['method'],
  url: RequestParams['url'],
  data: T | undefined
): Promise<T> => {
  const option: RequestParams<Response<T>> = {
    method,
    isShowLoad: false,
    url: apiConfig.baseUrl + url,
    data: data,
    success(res) {
      if (res.statusCode !== 200) {
        Taro.showToast({
          title: res.data?.message,
          icon: 'error',
          duration: 3000
        })
        res.errMsg = res.data?.message
      }
    },
    error(e) {
      console.log('api', 'query fail:', e)
    }
  }

  return Taro.request(option).then(response => response.data.data)
}

export default {
  get: <T = any>(url: string, data?) => {
    return request<T>('GET', url, data)
  },
  post: <T = any>(url: string, data) => {
    return request<T>('POST', url, data)
  },
  put: <T = any>(url: string, data) => {
    return request<T>('PUT', url, data)
  },
  delete: <T = any>(url: string, data) => {
    return request<T>('DELETE', url, data)
  }
}
