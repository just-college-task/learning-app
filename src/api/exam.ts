import request from '@/utils/request'

const EXAM_PUBLIC_URL = '/api/user/exam'

export function getExamById(examId: any) {
  return request.get<any>(`${EXAM_PUBLIC_URL}/list`, {
    examId
  })
}
