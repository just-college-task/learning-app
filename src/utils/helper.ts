export const wait = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

export const getImgUrl = (path: string) => process.env.API_HOST + path
