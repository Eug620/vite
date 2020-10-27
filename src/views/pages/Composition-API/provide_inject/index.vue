<!--
 * @Author: yeyuhang
 * @Date: 2020-10-22 14:47:51
 * @LastEditTime: 2020-10-27 17:48:56
 * @LastEditors: yeyuhang
 * @Descripttion: 头部注释
-->
<template>
  <eug-card showHeader :header="name" bordered hoverable showExtra :extra="extra">
    <template #description>
      <p>provide 和 inject  两者都只能在setup（）中使用当前活动实例进行调用。</p>
    </template>
  </eug-card>
</template>

<script>
import { useState } from "./index.js";
import { defineComponent } from "vue";
export default defineComponent({
  setup () {
    return {
      ...useState()
    }
  }
})
</script>

<style>

</style>