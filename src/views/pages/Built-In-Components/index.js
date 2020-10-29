/*
 * @Author: yeyuhang
 * @Date: 2020-10-29 15:58:32
 * @LastEditTime: 2020-10-29 16:29:36
 * @LastEditors: yeyuhang
 * @Descripttion: 头部注释
 */
import { reactive, toRefs } from "vue"

export const useState = () => {
    const state = reactive({
        name: 'Built-In Components',
        extra: 'https://v3.vuejs.org/api/built-in-components.html',
        itemList: [
            {
                title: 'Component',
                isCompoents: 'Component',
                link: 'https://v3.vuejs.org/api/built-in-components.html#component',
                apiList: []
            },
            {
                title: 'Transition',
                isCompoents: 'Transition',
                link: 'https://v3.vuejs.org/api/built-in-components.html#transition',
                apiList: []
            },
            {
                title: 'Transitiongroup',
                isCompoents: 'Transitiongroup',
                link: 'https://v3.vuejs.org/api/built-in-components.html#transition-group',
                apiList: []
            },
            {
                title: 'Keepalive',
                isCompoents: 'Keepalive',
                link: 'https://v3.vuejs.org/api/built-in-components.html#keep-alive',
                apiList: []
            },
            {
                title: 'Slot',
                isCompoents: 'Slot',
                link: 'https://v3.vuejs.org/api/built-in-components.html#slot',
                apiList: []
            },
            {
                title: 'Teleport',
                isCompoents: 'Teleport',
                link: 'https://v3.vuejs.org/api/built-in-components.html#teleport',
                apiList: []
            }
        ]
    })
    return toRefs(state)
}