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
  poster: null
  score: number
}

interface CoursePart {
  partId: number
  courseId: number
  video: any
  sort: number
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
