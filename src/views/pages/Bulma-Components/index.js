import { reactive, toRefs } from "vue"

export const useState = () => {
    const state = reactive({
      name: 'Bulma',
      extra: 'https://bulma.io/',
      mode: 'top',
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
        // }
      ]
    })
    return toRefs(state)
}

export const callback = (val) => {
  console.log(val);
}
