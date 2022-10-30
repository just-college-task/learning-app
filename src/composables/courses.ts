import {
  fetchAnnouncements,
  fetchCourse,
  fetchJoinedCourses,
  fetchPopularCourses,
  postAnnouncement
} from '@/api/courses'
import { Announcement, PageParams } from 'types/api'
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

export const useJoinedCoursesQuery = (params: PageParams = defaultPageParams) =>
  useQuery(['JOINED_COURSES', params.page, params.size], () => fetchJoinedCourses(params))
