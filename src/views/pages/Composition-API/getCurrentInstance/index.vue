<!--
 * @Author: yeyuhang
 * @Date: 2020-10-22 14:48:01
 * @LastEditTime: 2020-10-27 17:48:29
 * @LastEditors: yeyuhang
 * @Descripttion: 头部注释
-->
<template>
  <eug-card showHeader :header="name" bordered hoverable showExtra :extra="extra">
    <template #description>
      <p>getCurrentInstance允许访问内部组件实例，这些实例对于高级用法或库创建者很有用。</p>
      <p>getCurrentInstance仅在设置或生命周期挂钩期间起作用</p>
      <h3>example</h3> 
      <i>const internalInstance = getCurrentInstance()</i><br>
      <i>internalInstance.appContext.config.globalProperties // access to globalProperties</i>
    </template>
  </eug-card>
</template>

<script>
import { useState } from "./index"
import { defineComponent } from "vue"
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