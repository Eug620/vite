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
import { useState } from "./index.js"
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

</style>