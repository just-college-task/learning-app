import { info } from '@/api/user'
import { User } from 'types/api'
import { useQuery, UseQueryOptions } from 'vue-query'

export const useUserInfoQuery = (options?: UseQueryOptions<User>) =>
  useQuery('USER_INFO', () => info(), options)
