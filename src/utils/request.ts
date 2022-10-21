/* eslint-disable prettier/prettier */
import Taro from "@tarojs/taro"

const apiConfig = {
    baseUrl: process.env.API_HOST
}

//interceptor
const interceptor = function (chain: any) {
    const requestParams = chain.requestParams
    // const { method, data, url } = requestParams
    const token = Taro.getStorageSync('TOKEN') //get token from Taro Storage
    if (token) {
        requestParams.header = {
            ...requestParams.header,
            Authorization: 'Bearer ' + token
        }
    }

    return chain.proceed(requestParams)
        .then(res => {
            return res
        })
}

//add interceptor
Taro.addInterceptor(interceptor)

//request
const request = async (method, url, params) => {

    const option = {
        method,
        isShowLoad: false,
        url: apiConfig.baseUrl + url,
        data: params,
        success(res) {
            console.log(res);
            if (res?.statusCode == 500) {
                Taro.showToast({
                    title: "服务器发生错误",
                    icon: "error",
                    duration: 3000
                })
            }
        },
        error(e) {
            console.log('api', 'query fail:', e)
        }
    }

    return await Taro.request(option)
}

export default {
    get: (url, config) => {
        return request('GET', url, config);
    },
    post: (url, config) => {
        return request('POST', url, config);
    },
    put: (url, config) => {
        return request('PUT', url, config);
    },
    delete: (url, config) => {
        return request('DELETE', url, config);
    },
}