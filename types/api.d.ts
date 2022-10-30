export type Response<T = any> = {
  data: T
  message: string
  status: number
}

export type WithPage<T> = {
  totalPages: number
  totalElements: number
  currentPage: number
  currentElements: number
  pageSize: number
  hasMore: boolean
  hasPrevious: boolean
  dataList: T[]
  first: boolean
  last: boolean
}

export interface PageParams {
  page: number
  size: number
}

export interface UserInfo {
  avatar: string
  nickname: string
  phoneNumber: string
  type: string
  userId: number
}

export interface Course {
  courseId: number
  userid: number
  teacher: string
  name: string
  profile: string
  isPublic: number
  members: number
  createTime: null
  poster: string
  score: number
  totalPart: number
  learnedPart: number
}

export type NewCourse = Pick<Course, 'name' | 'profile' | 'poster'>

interface CoursePart {
  partId: number
  courseId: number
  video: any
  /** 章节序号 */ sort: number
  name: string
  noteList: any[]
}

interface Comment {
  id: number
  coursePartId: number
  userid: number
  content: string
  time: null
}

interface Banner {
  bannerId: number
  picLink: string
  courseId: number
  time: string
}

interface QuestionCollect {
  collectId: number
  userid: number
  name: string
  profile: string
}

interface QuestionOption {
  answer: boolean
  content: string
  isAnswer: boolean
  option: string
}

interface Question {
  id: number
  questionCollectId: number
  content: string[]
  options: QuestionOption[]
  score: number
}

export interface Announcement {
  announcementId: number
  courseId: number
  title: string
  content: string
  time: any
}

export interface User {
  userId: number
  nickname: string
  avatar: Maybe<string>
  phoneNumber: string
}
