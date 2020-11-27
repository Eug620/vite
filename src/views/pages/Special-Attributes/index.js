/*
 * @Author: yeyuhang
 * @Date: 2020-11-27 16:43:48
 * @LastEditTime: 2020-11-27 17:00:02
 * @LastEditors: yeyuhang
 * @Descripttion: 头部注释
 */
import { reactive, toRefs } from "vue"

export const useState = () => {
  const state = reactive({
    name: 'Special-Attributes',
    extra: 'https://v3.vuejs.org/api/special-attributes.html',
    itemList: [
        {
            title: 'key',
            isCompoents: 'Key',
            link: 'https://v3.vuejs.org/api/special-attributes.html#key',
            apiList: []
        },
        {
            title: 'ref',
            isCompoents: 'Refcommon',
            link: 'https://v3.vuejs.org/api/special-attributes.html#ref',
            apiList: []
        },
        {
            title: 'is',
            isCompoents: 'Iscommon',
            link: 'https://v3.vuejs.org/api/special-attributes.html#is',
            apiList: []
        }
    ]
  })
  return toRefs(state)
}