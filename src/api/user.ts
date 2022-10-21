import request from '@/utils/request'

export function login(params) {
  return request.get('/auth/signin', params)
}

export function register(data) {
  return request.post('/auth/signup', data)
}
