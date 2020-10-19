
<template>
  <a-card class="eug-card-box">
    <template v-slot:title>
      <slot name="header"/>
    </template>
    <template v-slot:extra>
      <slot name="extra"/>
    </template>
    <slot name="description"/><br>
    <slot name="content"/>
  </a-card>
</template>

<script>
import { useState } from "./index.js"
import { toRefs } from "vue";
export default {
  setup(_, ctx) {
    const state = useState()
    return {
        ...toRefs(state)
    }
  }
}
</script>

<style lang="scss">
@import './index.scss'
</style>