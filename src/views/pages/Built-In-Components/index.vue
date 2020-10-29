<!--
 * @Author: yeyuhang
 * @Date: 2020-10-21 12:25:21
 * @LastEditTime: 2020-10-29 16:07:20
 * @LastEditors: yeyuhang
 * @Descripttion: 头部注释
-->
<template>
  <eug-card showHeader showExtra :extra="extra" :header="name">
    <template #content>
      <component v-for="item in itemList" :item="item" :key="item.title" :is="item.isCompoents" />
    </template>
  </eug-card>
</template>

<script>
import { defineComponent } from "vue"
import { useState } from "./index.js";
import Component from "./Component/index.vue"
import Transition from "./Transition/index.vue"
import Transitiongroup from "./Transition-group/index.vue"
import Keepalive from "./Keep-alive/index.vue"
import Slot from "./Slot/index.vue"
import Teleport from "./Teleport/index.vue"

export default defineComponent({
  components: {
    Component,
    Transition,
    Transitiongroup,
    Keepalive,
    Slot,
    Teleport
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