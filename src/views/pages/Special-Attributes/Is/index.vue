<!--
 * @Author: yeyuhang
 * @Date: 2020-11-27 16:46:53
 * @LastEditTime: 2020-11-27 16:57:20
 * @LastEditors: yeyuhang
 * @Descripttion: 头部注释
-->
<template>
  <eug-card ref="ref_count_ref" showHeader :header="name" bordered hoverable showExtra :extra="extra">
    <template #content>
    </template>
  </eug-card>
</template>

<script>
import { defineComponent } from "vue";
import { useState } from "./index.js";
export default defineComponent({
  props: {
    item: Object
  },
  setup (_, ctx) {
    return {
        ...useState(_)
    }
  }
})
</script>

<style>

</style>