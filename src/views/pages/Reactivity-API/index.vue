<!--
 * @Author: yeyuhang
 * @Date: 2020-10-23 10:28:54
 * @LastEditTime: 2020-10-26 16:32:16
 * @LastEditors: yeyuhang
 * @Descripttion: 头部注释
-->
<template>
  <eug-card showHeader showExtra :extra="extra" :header="name">
    <template #content>
      <!-- component -- 多用于动态组件 -->
      <component v-for="item in itemList" :item="item" :key="item.title" :is="item.isCompoents" />
    </template>
  </eug-card>
</template>

<script>
import Basic from "./Basic-Reactivity-APIs/index.vue"
import Refs from "./Refs/index.vue"
import Computed from "./Computed-and-watch/index.vue"
import { useState } from "./index.js"
export default {
  components: {
    Basic,
    Refs,
    Computed
  },
  setup () {
    return {
      ...useState()
    }
  }
}
</script>

<style>

</style>