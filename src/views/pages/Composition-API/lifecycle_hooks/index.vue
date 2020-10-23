<!--
 * @Author: yeyuhang
 * @Date: 2020-10-22 14:47:56
 * @LastEditTime: 2020-10-23 15:09:49
 * @LastEditors: yeyuhang
 * @Descripttion: 头部注释
-->
<template>
  <eug-card showHeader :header="name" bordered hoverable showExtra :extra="extra">
    <template #description>
      <h3>import</h3>
      <i class="pl-20">import { onMounted, onUpdated, onUnmounted } from 'vue'</i>
      <h3>changes</h3>
      <p class="pl-20">
         <a-row v-for="hooks in hooksList" :key="hooks">
          <a-col :span="8">{{hooks.before}}</a-col>
          <a-col :span="2">>>></a-col>
          <a-col :span="8">{{hooks.after}}</a-col>
        </a-row>
      </p>
    </template>

  </eug-card>
</template>

<script>
import { useState } from "./index.js"
import { onBeforeMount, onMounted, onUpdated, onBeforeUnmount, onUnmounted, onErrorCaptured, onRenderTracked, onRenderTriggered } from 'vue'
export default {
  setup () {
    onBeforeMount(() => {
      console.log('Lifecycle Hooks --- onBeforeMount')
    })
    onMounted(() => {
      console.log('Lifecycle Hooks --- onMounted')
    })
    onUpdated(() => {
      console.log('Lifecycle Hooks --- onUpdated')
    })
    onBeforeUnmount(() => {
      console.log('Lifecycle Hooks --- onBeforeUnmount')
    })
    onUnmounted(() => {
      console.log('Lifecycle Hooks --- onUnmounted')
    })
    onErrorCaptured(() => {
      console.log('Lifecycle Hooks --- onErrorCaptured')
    })
    onRenderTracked(() => {
      console.log('Lifecycle Hooks --- onRenderTracked')
    })
    onRenderTriggered(() => {
      console.log('Lifecycle Hooks --- onRenderTriggered')
    })
    return {
      ...useState()
    }
  }
}
</script>

<style>

</style>