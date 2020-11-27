<!--
 * @Author: yeyuhang
 * @Date: 2020-10-23 10:28:54
 * @LastEditTime: 2020-11-27 16:59:06
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
import { useState } from "./index.js"
import { defineComponent } from "vue"
import Key from "./Key/index.vue"
import Refcommon from "./Ref/index.vue"
import Iscommon from "./Is/index.vue"

export default defineComponent({
  components: {
    Key,
    Refcommon,
    Iscommon
  },
  setup () {
    return {
      ...useState()
    }
  }
})
</script>

<style>

</style>