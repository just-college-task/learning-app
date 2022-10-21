import request from '@/utils/request'

export function login(data) {
  return request.post('/auth/signin', data)
}

export function register(data) {
  return request.post('/auth/signup', data)
}
