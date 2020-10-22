/*
 * @Author: yeyuhang
 * @Date: 2020-10-22 15:41:36
 * @LastEditTime: 2020-10-22 16:52:16
 * @LastEditors: yeyuhang
 * @Descripttion: 头部注释
 */
import { reactive, toRefs } from "vue"
export const useState = () => {
    const state = reactive({
        name: 'setup',
        extra: 'https://v3.vuejs.org/api/composition-api.html#setup'
    })
    return toRefs(state)
}

export const useEmitSetup = (emit) => {
    console.log('触发emit')
    emit('useChangeSetup', '通过emit更改了prop传入的值')
}