<!--
 * @Author: yeyuhang
 * @Date: 2020-10-19 12:07:42
 * @LastEditTime: 2020-10-21 16:22:43
 * @LastEditors: yeyuhang
 * @Descripttion: 头部注释
-->

<template>
  <a-card class="eug-card-box" :bordered="bordered" :hoverable="hoverable">
    {{bordered}}
    {{hoverable}}
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
  props: {
    bordered: {
      type: Boolean,
      default: false
    },
    hoverable: {
      type: Boolean,
      default: false
    }
  },
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