<!--
 * @Author: yeyuhang
 * @Date: 2020-10-19 12:07:42
 * @LastEditTime: 2020-10-27 17:45:49
 * @LastEditors: yeyuhang
 * @Descripttion: 头部注释
-->

<template>
  <a-card class="eug-card-box" :bordered="bordered" :hoverable="hoverable">
    <template v-slot:title v-if="showHeader">
      {{ header }}
    </template>
    <template v-slot:extra v-if="showExtra">
      <a :href="extra" target="_blank"><eug-icon-link/></a>
    </template>
    <slot name="description"/><br>
    <slot name="content"/>
  </a-card>
</template>

<script>
import { useState } from "./index.js"
import { toRefs, defineComponent } from "vue";
export default defineComponent({
  props: {
    bordered: {
      type: Boolean,
      default: false
    },
    hoverable: {
      type: Boolean,
      default: false
    },
    showHeader: {
      type: Boolean,
      default: false
    },
    header: {
      type: String,
      default: '默认标题'
    },
    showExtra: {
      type: Boolean,
      default: false
    },
    extra: {
      type: String,
      default: ''
    }
  },
  setup(_, ctx) {
    const state = useState()
    return {
        ...toRefs(state)
    }
  }
})
</script>

<style lang="scss">
@import './index.scss'
</style>