import request from '@/utils/request'
import { PageParams } from 'types/api'
import { Course, WithPage } from 'types/api'

const COURSE_BASE_URL = '/api/course'

export const fetchPopularCourses = (pageParams: PageParams) =>
  request.get<WithPage<Course>>(`${COURSE_BASE_URL}/popular`, pageParams)
