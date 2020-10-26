<!--
 * @Author: yeyuhang
 * @Date: 2020-10-20 10:17:40
 * @LastEditTime: 2020-10-26 16:32:34
 * @LastEditors: yeyuhang
 * @Descripttion: 头部注释
-->
<template>
  <div>
    <eug-card showHeader showExtra :extra="extra" :header="name">
      <!-- <template #extra>
        <eug-icon-link />
      </template> -->
      <template #description>
        <!-- description -->
      </template>
      <template #content>
        <setup :id="itemList[0]" :setupProps="setupProps" @useChangeSetup="(val)=>useChangeSetup(state,val)"/>
        <lifecycle-hooks :id="itemList[1]"/>
        <provide-inject :id="itemList[2]"/>
        <get-current-instance :id="itemList[3]"/>
      </template>
    </eug-card>
    <!-- 锚点 -->
    <a-anchor v-if="false" class="eug-composition-api-content-anchor">
      <a-anchor-link v-for="item in itemList" :key="item" :href="`#${item}`" :title="item" />
    </a-anchor>
  </div>
</template>

<script>
import { toRefs } from 'vue'
import { useState, useChangeSetup } from './index'
import Setup from './setup/index.vue'
import LifecycleHooks from './lifecycle_hooks/index.vue'
import ProvideInject from './provide_inject/index.vue'
import GetCurrentInstance from './getCurrentInstance/index.vue'
export default {
  components:{
    Setup,
    LifecycleHooks,
    ProvideInject,
    GetCurrentInstance
  },
  setup (_, ctx) {
    const state = useState()
    return {
      ...toRefs(state),
      state,
      useChangeSetup
    }
  }
}
</script>

<style lang="scss">
@import './index.scss'
</style>