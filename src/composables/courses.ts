import { fetchPopularCourses } from '@/api/courses'
import { PageParams } from 'types/api'
import { useQuery, UseQueryOptions } from 'vue-query'

const defaultPageParams: PageParams = {
  page: 1,
  size: 4
}

export const usePopularCoursesQuery = (
  params: PageParams = defaultPageParams,
  options: UseQueryOptions = {}
) =>
  useQuery(
    ['POPULAR_COURSES', params.page, params.size],
    () => fetchPopularCourses(params),
    options
  )
