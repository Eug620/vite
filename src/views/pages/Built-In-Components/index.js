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
                apiList: [
                  {
                    apiTitle: 'Props',
                    descripttion: 'is - string | Component'
                  },
                  {
                    apiTitle: 'Usage',
                    descripttion: '用于呈现动态组件的“元组件”。要渲染的实际组件由is道具确定。一个prop是一个字符串，可以是HTML标记名称或组件名称'
                  },
                  {
                    apiTitle: 'Example',
                    descripttion: [
                      '<!-- a dynamic component controlled by -->',
                      '<!-- the `componentId` property on the vm -->',
                      '<component :is="componentId"></component>',
                      '<!-- can also render registered component or component passed as prop -->',
                      '<component :is="$options.components.child"></component>',
                      '<!-- can reference components by string -->',
                      `<component :is="condition ? 'FooComponent' : 'BarComponent'"></component>`,
                      '<!-- can be used to render native HTML elements -->',
                      `<component :is="href ? 'a' : 'span'"></component>`
                    ]
                  }
                ]
            },
            {
                title: 'Transition',
                isCompoents: 'Transition',
                link: 'https://v3.vuejs.org/api/built-in-components.html#transition',
                apiList: [
                  {
                    apiTitle: 'Props',
                    descripttion: [
                      'name - string',
                      'appear - boolean',
                      'persisted - boolean',
                      'css - boolean',
                      'type - string',
                      'mode - string',
                      'duration - number | {enter: number,leave: number }',
                      'enter-from-class - string',
                      'leave-from-class - string',
                      'appear-class - string',
                      'enter-to-class - string',
                      'leave-to-class - string',
                      'appear-to-class - string',
                      'enter-active-class - string',
                      'leave-active-class - string',
                      'appear-active-class - string'
                    ]
                  },
                  {
                    apiTitle: 'Events',
                    descripttion: [
                      'before-enter',
                      'before-leave',
                      'enter',
                      'leave',
                      'appear',
                      'after-enter',
                      'after-leave',
                      'after-appear',
                      'enter-cancelled',
                      'leave-cancelled (v-show only)',
                      'appear-cancelled'
                    ]
                  },
                  {
                    apiTitle: 'Usage',
                    descripttion: '<transition>用作单个元素/组件的过渡效果。 <transition>仅将过渡行为应用于内部的包装内容；它不会呈现额外的DOM元素，也不会显示在检查的组件层次结构中.'
                  }
                ]
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
