/*
 * @Author: yeyuhang
 * @Date: 2020-10-23 15:17:31
 * @LastEditTime: 2020-10-23 15:21:23
 * @LastEditors: yeyuhang
 * @Descripttion: 头部注释
 */
import { reactive, toRefs } from "vue"

export const useState = () => {
    const state = reactive({
        name: 'Provide / Inject',
        extra: 'https://v3.vuejs.org/api/composition-api.html#provide-inject'
    })
    return toRefs(state)
}