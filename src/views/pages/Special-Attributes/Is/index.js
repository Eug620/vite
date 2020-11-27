/*
 * @Author: yeyuhang
 * @Date: 2020-10-26 15:52:46
 * @LastEditTime: 2020-11-27 16:57:34
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