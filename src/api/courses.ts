import request from '@/utils/request'
import { PageParams } from 'types/api'

const COURSE_BASE_URL = '/api/course'

export const fetchPopularCourses = (pageParams: PageParams) =>
  request.get(`${COURSE_BASE_URL}/popular`, pageParams)
