import request from '@/utils/request'
import { WithPage, Question } from 'types/api'

const QUESTION_SUBMIT_PUBLIC_URL = '/api/user/question'

export function getQuestionList(questionCollectId, page, size) {
  return request.get<WithPage<Question>>(`${QUESTION_SUBMIT_PUBLIC_URL}/list`, {
    questionCollectId,
    page,
    size
  })
}
