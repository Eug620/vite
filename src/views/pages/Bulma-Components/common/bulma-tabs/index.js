import { reactive, toRefs } from "vue"

/*
 * @Author: yeyuhang
 * @Date: 2020-11-13 15:38:01
 * @LastEditTime: 2020-11-13 16:50:54
 * @LastEditors: yeyuhang
 * @Descripttion: 头部注释
 */
export const useState = () => {
  const state = reactive({
    defaults: 'Pictures',
    center: 'Pictures',
    right: 'Pictures',
    icons: 'Pictures',
    small: 'Pictures',
    medium: 'Pictures',
    large: 'Pictures',
    styles: 'Pictures',
    toogle: 'Pictures',
    rounded: 'Pictures',
    list: [
      'Pictures',
      'Music',
      'Videos',
      'Documents'
    ],
    iconList: [
      'eug-icon-twitter',
      'eug-icon-ding',
      'eug-icon-gitlab',
      'eug-icon-github'
    ]
  })
  return toRefs(state)
}

