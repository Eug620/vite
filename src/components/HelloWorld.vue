<template>
  <div>
    <p>{{refss.a}}</p>
    <textarea  v-model="refss.a"/>
    <p ref="refs">按钮</p>
  </div>
</template>

<script>
import { reactive, ref, onMounted } from 'vue'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  setup (_, ctx) {
    const refss = reactive({ a: 'hello'})
    const refs = ref(null)
    onMounted(() => {
      console.log('// mounted取到ref模版')
      console.log(refs)
    })
    return {
      refss,
      refs
    }
  }
}
</script>
