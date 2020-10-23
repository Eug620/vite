/*
 * @Author: yeyuhang
 * @Date: 2020-10-23 15:21:53
 * @LastEditTime: 2020-10-23 15:23:47
 * @LastEditors: yeyuhang
 * @Descripttion: 头部注释
 */
import { reactive, toRefs } from "vue"

export const useState = () => {
    const state = reactive({
        name: 'getCurrentInstance',
        extra: 'https://v3.vuejs.org/api/composition-api.html#getcurrentinstance'
    })
    return toRefs(state)
}