import request from '@/utils/request'
import { User } from 'types/api'

export function login(data) {
  return request.post('/auth/signin', data)
}

export function wechatLogin(data: { code: string }) {
  return request.post<string>('/auth/wechat_signin', data)
}

export function info() {
  return request.get<User>('/auth/info')
}

export function updateInfo(data) {
  return request.post('/auth/update', data)
}

export function register(data) {
  return request.post<string>('/auth/signup', data)
}
