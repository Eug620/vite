/*
 * @Author: yeyuhang
 * @Date: 2020-12-14 16:02:25
 * @LastEditTime: 2020-12-14 16:32:43
 * @LastEditors: yeyuhang
 * @Descripttion: 头部注释
 */
import request from '/@/plugin/axios/index.js'

const Url = {
    'server': {
        'getUserList': '/user/getUserList'
    }
}
const isMock = false
const requestServerName = isMock ? 'mock' : 'server'

export default {
    GetUserList (params) {
        return request({
            url: Url[requestServerName].getUserList,
            method: 'get',
            params
        })
    }
}