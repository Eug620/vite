<!--
 * @Author: yeyuhang
 * @Date: 2020-11-10 16:56:08
 * @LastEditTime: 2020-11-13 15:24:10
 * @LastEditors: yeyuhang
 * @Descripttion: 头部注释
-->
<template>
 <eug-card showHeader :header="name" bordered hoverable showExtra :extra="extra">
   <template #content>
      <div style="height: calc(100vh - 250px)">
        <a-tabs
          animated
          tab-position="left"
          :style="{ height: '95%' }"
          @prevClick="callback"
          @nextClick="callback"
        >
          <a-tab-pane style="height: calc(100vh - 270px);overflow:scroll;" v-for="comp in component" :key="comp.label" :tab="comp.label">
            <component :is="comp.components"/> 
          </a-tab-pane>
        </a-tabs>
      </div>
   </template>
 </eug-card>
</template>

<script module>
import { useState, callback } from './index.js'
import { defineComponent } from 'vue'
import BulmaTabs from './common/bulma-tabs/index.vue'
export default {
  components:{
    BulmaTabs
  },
  setup (_, ctx) {
    return {
      ...useState(_),
      callback
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "bulma/css/bulma.css";
</style>
