/*
 * @Author: yeyuhang
 * @Date: 2020-10-26 15:13:05
 * @LastEditTime: 2020-10-26 16:37:33
 * @LastEditors: yeyuhang
 * @Descripttion: 头部注释
 */
import { reactive, toRefs } from "vue"

export const useState = () => {
  const state = reactive({
    name: 'Reactivity-API',
    extra: 'https://v3.vuejs.org/api/reactivity-api',
    itemList: [
      {
        title: 'Basic Reactivity APIs',
        isCompoents: 'Basic',
        link: 'https://v3.vuejs.org/api/basic-reactivity.html',
        apiList: [
          {
            apiTitle: 'reactive',
            descripttion: '返回对象的反应性副本,反应式转换是“深度”的，它会影响所有嵌套属性'
          },
          {
            apiTitle: 'readonly',
            descripttion: '接受一个对象（反应性或平原）或ref，并返回一个只读代理到原始对象。只读代理很深：访问的任何嵌套属性也将是只读的'
          },
          {
            apiTitle: 'isProxy',
            descripttion: '检查对象是由反应式还是只读方式创建的代理'
          },
          {
            apiTitle: 'isReactive',
            descripttion: '检查对象是否是由React创建的React代理(如果代理是由只读创建的，但包装了其他由react创建的代理，则它也返回true)'
          },
          {
            apiTitle: 'isReadonly',
            descripttion: '检查对象是否是由readonly创建的只读代理'
          },
          {
            apiTitle: 'toRaw',
            descripttion: '返回反应式或只读代理的原始原始对象,这是一个转义口，可用于临时读取而不会引起代理访问/跟踪开销，也可用于写入而不会触发更改。不建议保留对原始对象的持久引用。谨慎使用'
          },
          {
            apiTitle: 'markRaw',
            descripttion: '标记一个对象，使其永远不会转换为代理。返回对象本身'
          },
          {
            apiTitle: 'shallowReactive',
            descripttion: '创建一个反应式代理，以跟踪其自身属性的反应性，但不执行嵌套对象的深度反应式转换（公开原始值'
          },
          {
            apiTitle: 'shallowReadonly',
            descripttion: '创建一个代理，使其自身的属性为只读，但不执行嵌套对象的深度只读转换（公开原始值）'
          }
        ]
      },
      {
        title: 'Refs',
        isCompoents: 'Refs',
        link: 'https://v3.vuejs.org/api/refs-api.html'
      },
      {
        title: 'Computed and watch',
        isCompoents: 'Computed',
        link: 'https://v3.vuejs.org/api/computed-watch-api.html'
      }
    ]
  })
  return toRefs(state)
}