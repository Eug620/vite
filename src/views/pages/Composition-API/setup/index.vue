<!--
 * @Author: yeyuhang
 * @Date: 2020-10-22 14:47:45
 * @LastEditTime: 2020-10-27 17:49:10
 * @LastEditors: yeyuhang
 * @Descripttion: 头部注释
-->
<template>
  <eug-card bordered hoverable showHeader :header="name" showExtra :extra="extra">
      <template #description>
          <h3>props</h3>
          <div class="pl-20">
            <i>props是反应性的，不能使用ES6解构，因为它会删除道具的反应性</i><br>
            <i>可以通过使用函数内部的toRefs来安全地进行操作setup</i><br>
          </div>
          <h3>context</h3>
          <div class="pl-20">
            <i>context对象是普通的JavaScript对象,可以在上安全地使用ES6解构context</i><br>
            <i>setup(props, { attrs, slots, emit })</i><br>
          </div>
          
          <h3>example</h3>
          <div class="pl-20">
            <p>{{setupProps}}</p>
            <eug-button @click="useEmitSetup(emit)">emit</eug-button>
          </div>
      </template>
  </eug-card>
</template>

<script>
import { useState, useEmitSetup } from './index.js'
import { watch, toRefs, defineComponent } from 'vue';
export default defineComponent({
    props: {
      setupProps: String
    },
    setup (props, context) {
        const { attrs, slots, emit } = context
        console.log('setup 参数(prop, context)');
        console.log('prop-------------------')
        console.log(props);
        console.log('context----------------')
        console.log(context);
        console.log('{ attrs, slots, emit }');
        console.log(attrs, slots, emit);
        // context 包含 { attrs, slots, emit }
        const state = useState()
        return {
            emit,
            slots,
            attrs,
            state,
            ...state,
            ...toRefs(props),
            useEmitSetup
        }
    }
})
</script>

<style>

</style>