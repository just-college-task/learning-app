export type response = {
  statusCode: number
  header: {
    [key: string]: any
  }
  errMsg: string
  error: boolean
  data: {
    [key: string]: any
  }
  cookies: []
}
