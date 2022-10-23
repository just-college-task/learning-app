/* eslint-disable prettier/prettier */
import Taro from "@tarojs/taro"
import type { response } from "../../types/api"
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
const request = async (method, url, data) => {

    const option = {
        method,
        isShowLoad: false,
        url: apiConfig.baseUrl + url,
        data: data,
        success(res: response) {
            if (res.statusCode !== 200) {
                Taro.showToast({
                    title: res.data?.message,
                    icon: "error",
                    duration: 3000
                })
                res.errMsg = res.data?.message              
            }
        },
        error(e) {
            console.log('api', 'query fail:', e)
        }
    }

    return await Taro.request(option)
}

export default {
    get: (url, data) => {
        return request('GET', url, data);
    },
    post: (url, data) => {
        return request('POST', url, data);
    },
    put: (url, data) => {
        return request('PUT', url, data);
    },
    delete: (url, data) => {
        return request('DELETE', url, data);
    },
}