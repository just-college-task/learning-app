import request from '@/utils/request'
import { Announcement, CoursePart, PageParams } from 'types/api'
import { Course, WithPage } from 'types/api'

const COURSE_BASE_URL = '/api/course'

export const fetchPopularCourses = (pageParams: PageParams) =>
  request.get<WithPage<Course>>(`${COURSE_BASE_URL}/popular`, pageParams)

export const fetchCourse = (courseId: number) =>
  request.get<Course>(`${COURSE_BASE_URL}/${courseId}`)

export const fetchCourseParts = (courseId: number) =>
  request.get<CoursePart[]>(`${COURSE_BASE_URL}/${courseId}/parts`)

export const fetchAnnouncements = (courseId: number, pageParams: PageParams) =>
  request.get<WithPage<Announcement>>(`${COURSE_BASE_URL}/${courseId}/announcement`, pageParams)

export const postAnnouncement = (
  courseId: number,
  announcement: Omit<Announcement, 'announcementId'>
) => request.post(`${COURSE_BASE_URL}/${courseId}/announcement/create`, announcement)

export const fetchJoinedCourses = (pageParams: PageParams) =>
  request.get<WithPage<Course>>(`/api/user/joined_courses`, pageParams)
