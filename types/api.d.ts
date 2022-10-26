export type Response<T = any> = {
  data: Maybe<T>
  message: string
  status: number
}

export interface PageParams {
  page: number
  size: number
}
