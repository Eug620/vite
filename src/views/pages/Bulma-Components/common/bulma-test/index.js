/*
 * @Author: yeyuhang
 * @Date: 2020-12-14 15:39:57
 * @LastEditTime: 2020-12-14 17:39:01
 * @LastEditors: yeyuhang
 * @Descripttion: 头部注释
 */
import { reactive } from "vue"
import serverApi from "/@/api/server/index.js"
import { message } from "ant-design-vue"

export const useState = () => {
    const state = reactive({
        name: 'bulma-test',
        userList: []
    })
    return state
}

export const useGetUser = async (state) => {
    try {
        let res = await serverApi.GetUserList()
        if (res.code === 200) {
            message.success('success')
            state.userList = res.result
        } else {
            message.error('error')
        }
    } catch (error) {
        message.error(error)
    }
}
