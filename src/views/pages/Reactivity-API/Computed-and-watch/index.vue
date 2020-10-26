<!--
 * @Author: yeyuhang
 * @Date: 2020-10-26 15:23:40
 * @LastEditTime: 2020-10-26 16:30:03
 * @LastEditors: yeyuhang
 * @Descripttion: 头部注释
-->
<template>
  <eug-card showHeader :header="name" bordered hoverable showExtra :extra="extra">
    <template #content>
      <div v-for="item in apiList" :key="item.apiTitle" class="eug-api-box">
        <span class="code">{{item.apiTitle}}</span><br>
        <p class="eug-api-descripttion eug-api-box"><i>{{item.descripttion}}</i></p>
      </div>
    </template>
  </eug-card>
</template>

<script>
import { useState } from './index.js'
export default {
  props: {
    item: Object
  },
  setup (_, ctx) {
    return {
      ...useState(_)
    }
  }
}
</script>

<style>
.code{
    color: #476582;
    padding: .25rem .5rem;
    margin: 0;
    font-size: .85em;
    background-color: rgba(27,31,35,.05);
    border-radius: 3px;
}
.eug-api-box{
    margin: 20px 0;
}
.eug-api-descripttion{
    padding-left: 40px;
}
</style>