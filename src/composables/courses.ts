import { fetchAnnouncements, fetchCourse, fetchPopularCourses } from '@/api/courses'
import { PageParams } from 'types/api'
import { useQuery } from 'vue-query'

const defaultPageParams: PageParams = {
  page: 1,
  size: 4
}

export const usePopularCoursesQuery = (params: PageParams = defaultPageParams) =>
  useQuery(['POPULAR_COURSES', params.page, params.size], () => fetchPopularCourses(params))

export const useAnnouncementsQuery = (courseId: number, params: PageParams = defaultPageParams) =>
  useQuery(['COURSE_ANNOUNCEMENT', courseId, params.page, params.size], () =>
    fetchAnnouncements(courseId, params)
  )

export const useCourseQuery = (courseId: number) =>
  useQuery(['COURCE', courseId], () => fetchCourse(courseId))
