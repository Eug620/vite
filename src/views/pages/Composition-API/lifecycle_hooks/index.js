/*
 * @Author: yeyuhang
 * @Date: 2020-10-23 14:29:28
 * @LastEditTime: 2020-10-23 15:00:06
 * @LastEditors: yeyuhang
 * @Descripttion: 头部注释
 */
import { reactive, toRefs } from "vue"

export const useState = () => {
    const state = reactive({
        name: 'Lifecycle Hooks',
        extra: 'https://v3.vuejs.org/api/composition-api.html#lifecycle-hooks',
        hooksList: [
          {
            before: '2.x',
            after: '3.x'
          },
          {
            before: 'beforeCreate',
            after: 'setup()'
          },
          {
            before: 'created',
            after: 'setup()'
          },
          {
            before: 'beforeMount',
            after: 'onBeforeMount'
          },
          {
            before: 'mounted',
            after: 'onMounted'
          },
          {
            before: 'beforeUpdate',
            after: 'onBeforeUpdate'
          },
          {
            before: 'updated',
            after: 'onUpdated'
          },
          {
            before: 'beforeUnmount',
            after: 'onBeforeUnmount'
          },
          {
            before: 'unmounted',
            after: 'onUnmounted'
          },
          {
            before: 'errorCaptured',
            after: 'onErrorCaptured'
          },
          {
            before: 'renderTracked',
            after: 'onRenderTracked'
          },
          {
            before: 'renderTriggered',
            after: 'onRenderTriggered'
          }
        ]
    })
    return toRefs(state)
}