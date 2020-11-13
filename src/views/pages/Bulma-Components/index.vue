<template>
 <eug-card showHeader :header="name" bordered hoverable showExtra :extra="extra">
   <template #content>
     <a-radio-group v-model:value="mode" :style="{ marginBottom: '8px' }">
      <a-radio-button value="top">
        Horizontal
      </a-radio-button>
      <a-radio-button value="left">
        Vertical
      </a-radio-button>
    </a-radio-group>
    <a-tabs
      :tab-position="mode"
      :style="{ height: '200px' }"
      @prevClick="callback"
      @nextClick="callback"
    >
      <a-tab-pane v-for="comp in component" :key="comp.label" :tab="comp.label">
        <component :is="comp.components"/> 
      </a-tab-pane>
    </a-tabs>
   </template>
 </eug-card>
</template>

<script>
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

<style scoped>
  @import 'bulma/css/bulma.css'
</style>
