export type response = {
  statusCode: number
  header: {
    [key: string]: any
  }
  errMsg: string
  data: {
    [key: string]: any
  }
  cookies: []
}
