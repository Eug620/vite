/*
 * @Author: yeyuhang
 * @Date: 2020-10-26 15:13:05
 * @LastEditTime: 2020-10-27 15:30:53
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
        link: 'https://v3.vuejs.org/api/refs-api.html',
        apiList: [
          {
            apiTitle: 'ref',
            descripttion: '接受一个内部值并返回一个响应式且可变的 ref 对象。ref 对象具有指向内部值的单个 property .value'
          },
          {
            apiTitle: 'unref',
            descripttion: '如果参数为 ref，则返回内部值，否则返回参数本身。这是 val = isRef(val) ? val.value : val'
          },
          {
            apiTitle: 'toRef',
            descripttion: '可以用来为源响应式对象上的 property 性创建一个 ref。然后可以将 ref 传递出去，从而保持对其源 property 的响应式连接'
          },
          {
            apiTitle: 'toRefs',
            descripttion: '将响应式对象转换为普通对象，其中结果对象的每个 property 都是指向原始对象相应 property 的ref'
          },
          {
            apiTitle: 'isRef',
            descripttion: '检查值是否是引用对象'
          },
          {
            apiTitle: 'customRef',
            descripttion: '创建一个自定义的 ref，并对其依赖项跟踪和更新触发进行显式控制。它需要一个工厂函数，该函数接收 track 和 trigger 函数作为参数，并应返回一个带有 get 和 set 的对象'
          },
          {
            apiTitle: 'shallowRef',
            descripttion: '创建一个 ref，它跟踪自己的 .value 更改，但不会使其值成为响应式的'
          },
          {
            apiTitle: 'triggerRef',
            descripttion: '手动执行与 shallowRef](#shallowref) 关联的任何效果'
          }
        ]
      },
      {
        title: 'Computed and watch',
        isCompoents: 'Computed',
        link: 'https://v3.vuejs.org/api/computed-watch-api.html',
        apiList: [
          {
            apiTitle: 'computed',
            descripttion: '使用 getter 函数，并为从 getter 返回的值返回一个不变的响应式 ref 对象.或者，它可以使用具有 get 和 set 函数的对象来创建可写的 ref 对象'
          },
          {
            apiTitle: 'watchEffect',
            descripttion: '在响应式地跟踪其依赖项时立即运行一个函数，并在更改依赖项时重新运行它'
          },
          {
            apiTitle: 'watch',
            descripttion: 'watch API 与选项式 API this.$watch (以及相应的 watch 选项) 完全等效。watch 需要侦听特定的 data 源，并在单独的回调函数中副作用。默认情况下，它也是惰性的——即，回调是仅在侦听源发生更改时调用'
          }
        ]
      }
    ]
  })
  return toRefs(state)
}