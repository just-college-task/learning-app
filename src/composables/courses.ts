import {
  fetchAnnouncements,
  fetchCourse,
  fetchCourseParts,
  fetchJoinedCourses,
  fetchManagedCourses,
  fetchPopularCourses,
  postAnnouncement,
  postCourse
} from '@/api/courses'
import { Announcement, NewCourse, PageParams } from 'types/api'
import { useMutation, useQuery } from 'vue-query'

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

export const usePostAnnouncement = (courseId: number) =>
  useMutation((data: Omit<Announcement, 'announcementId'>) => postAnnouncement(courseId, data))

export const useCourseQuery = (courseId: number) =>
  useQuery(['COURSE', courseId], () => fetchCourse(courseId))

export const useCoursePartsQuery = (courseId: number) =>
  useQuery(['COURSE_PARTS', courseId], () => fetchCourseParts(courseId))

export const useJoinedCoursesQuery = (params: PageParams = defaultPageParams) =>
  useQuery(['JOINED_COURSES', params.page, params.size], () => fetchJoinedCourses(params))

export const useManagedCoursesQuery = (params: PageParams = defaultPageParams) =>
  useQuery(['MANAGED_COURSES', params.page, params.size], () => fetchManagedCourses(params))

export const usePostCourseMutation = () => useMutation((data: NewCourse) => postCourse(data))
