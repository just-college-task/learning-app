import request from '@/utils/request'

export function login(data) {
  return request.post('/auth/signin', data)
}

export function wechatLogin(data: { code: string }) {
  return request.post('/auth/wechat_signin', data)
}

export function register(data) {
  return request.post('/auth/signup', data)
}
