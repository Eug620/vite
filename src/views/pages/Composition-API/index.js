/*
 * @Author: yeyuhang
 * @Date: 2020-10-22 14:31:41
 * @LastEditTime: 2020-10-23 14:26:08
 * @LastEditors: yeyuhang
 * @Descripttion: 头部注释
 */
import { reactive } from 'vue'

export const useState = () => {
    const state = reactive({
        name: 'Composition-API',
        extra: 'https://v3.vuejs.org/api/composition-api.html',
        itemList: [
            'setup',
            'Lifecycle Hooks',
            'Provide / Inject',
            'getCurrentInstance'
        ],
        setupProps: 'Hello, setup!!! --- from Composition-API'
    })
    return state
}

export const useChangeSetup = (state,val) => {
    state.setupProps = val
}