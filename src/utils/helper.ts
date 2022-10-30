import { STORAGE_TOKEN_KEY } from '@/definitions'
import Taro from '@tarojs/taro'

export const wait = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

export const getImgUrl = (path: string) => process.env.API_HOST + path
export const getUploadHeaders = () => {
  const token = Taro.getStorageSync(STORAGE_TOKEN_KEY)
  const uploadHeaders = {
    Authorization: 'Bearer ' + token
  }
  return uploadHeaders
}
