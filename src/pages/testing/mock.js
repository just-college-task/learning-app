export function getData() {
  return JSON.parse(`
{
                "id": 32,
                "title": "future的使用",
                "courseId": 11,
                "userId": 4,
                "startTime": "2022-10-29T05:43:19.765+00:00",
                "endTime": "2022-10-31T17:40:39.000+00:00",
                "questionList": [
                    {
                        "id": 17,
                        "questionCollectId": 5,
                        "content": [
                            "请回答下面单词的意思"
                        ],
                        "options": [
                            {
                                "content": "aaa",
                                "isAnswer": false,
                                "option": "A"
                            },
                            {
                                "content": "bbb",
                                "isAnswer": false,
                                "option": "B"
                            },
                            {
                                "content": "ccc",
                                "isAnswer": false,
                                "option": "C"
                            },
                            {
                                "content": "ddd",
                                "isAnswer": true,
                                "option": "D"
                            }
                        ],
                        "score": 10.0
                    },
                    {
                        "id": 18,
                        "questionCollectId": 5,
                        "content": [
                            "AAAAscsdcsd"
                        ],
                        "options": [
                            {
                                "content": "vfdvfd",
                                "isAnswer": false,
                                "option": "A"
                            },
                            {
                                "content": "bbb",
                                "isAnswer": false,
                                "option": "B"
                            },
                            {
                                "content": "ccc",
                                "isAnswer": false,
                                "option": "C"
                            },
                            {
                                "content": "ddd",
                                "isAnswer": true,
                                "option": "D"
                            }
                        ],
                        "score": 10.0
                    }
                ]
            }
    `)
}

export function createSubmit(courseExamId) {
  return JSON.parse(`
{
    "id":0,
    "courseExamId":${courseExamId},
    "examTitle":"今天考试",
    "userId":4,
    "testList":[
    ]
}
    `)
}

export function createSubmitItem(questionId, answer, questionCollectId) {
  return JSON.parse(`
  {"questionId":${questionId},"answer":"${answer}","questionCollectId":${questionCollectId}}
`)
}
