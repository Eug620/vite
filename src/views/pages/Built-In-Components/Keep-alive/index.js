/*
 * @Author: yeyuhang
 * @Date: 2020-10-29 16:11:18
 * @LastEditTime: 2020-10-29 16:14:57
 * @LastEditors: yeyuhang
 * @Descripttion: 头部注释
 */
import { reactive, toRefs } from "vue"

export const useState = ({ item }) => {
    const state = reactive({
        name: item.title,
        extra: item.link,
        apiList: item.apiList
    })
    return toRefs(state)
}