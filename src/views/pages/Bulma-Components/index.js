/*
 * @Author: yeyuhang
 * @Date: 2020-11-10 16:57:03
 * @LastEditTime: 2020-12-14 15:56:45
 * @LastEditors: yeyuhang
 * @Descripttion: 头部注释
 */
import { reactive, toRefs } from "vue"

export const useState = () => {
    const state = reactive({
      name: 'Bulma',
      extra: 'https://bulma.io/',
      component: [
        {
          label: 'Tabs',
          components: 'BulmaTabs'
        },
        // {
        //   label: 'Tabs',
        //   components: 'bulma-tabs'
        // },
        // {
        //   label: 'Tabs',
        //   components: 'bulma-tabs'
        // },
        // {
        //   label: 'Tabs',
        //   components: 'bulma-tabs'
        // },
        // {
        //   label: 'Tabs',
        //   components: 'bulma-tabs'
        // },
        // {
        //   label: 'Tabs',
        //   components: 'bulma-tabs'
        // },
        // {
        //   label: 'Tabs',
        //   components: 'bulma-tabs'
        // },
        // {
        //   label: 'Tabs',
        //   components: 'bulma-tabs'
        // },
        // {
        //   label: 'Tabs',
        //   components: 'bulma-tabs'
        // },
        {
          label: 'Test',
          components: 'BulmaTest'
        },
      ]
    })
    return toRefs(state)
}

export const callback = (val) => {
  console.log(val);
}
