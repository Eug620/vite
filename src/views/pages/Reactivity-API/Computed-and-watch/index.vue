<!--
 * @Author: yeyuhang
 * @Date: 2020-10-26 15:23:40
 * @LastEditTime: 2020-10-29 15:45:05
 * @LastEditors: yeyuhang
 * @Descripttion: 头部注释
-->
<template>
  <eug-card showHeader :header="name" bordered hoverable showExtra :extra="extra">
    <template #content>
      <div v-for="item in apiList" :key="item.apiTitle" :class="$style['eug-api-box']">
        <span :class="$style['code']">{{item.apiTitle}}</span><br>
        <p :class="[$style['eug-api-descripttion'],$style['eug-api-box']]"><i>{{item.descripttion}}</i></p>
      </div>
      <h3>Example</h3>
      <div class="pl-20">
        <a-divider />
        <p>default: {{computed_count_d_A}}</p>
        <p>computed: {{computed_countA}}</p>
        <a-button @click="Add_count_d_A" type="primary">default ++</a-button>
        <a-divider />
        <p>default: {{computed_count_d_B}}<a-input v-model:value="computed_count_d_B" placeholder="default" /></p>
        <p>computed: {{computed_countB}}<a-input v-model:value="computed_countB" placeholder="computed" /></p>
        <a-divider />
        <p>watchEffect: {{watchEffect_count_A}}</p>
        <p><a-button @click="useCloseInterval" type="primary">stop</a-button></p>
        <p><a-button @click="useContinueInterval" type="primary">continue</a-button></p>
        <a-divider />
        <p>watch(reactive): <a-input v-model:value="watch_reactive.count" placeholder="watch" /></p>
        <p>watch(ref): <a-input v-model:value="watch_ref" placeholder="watch" /></p>
        <a-divider />
        <p>watch(多个源[数组形式监听]): 
          <div class="pl-20">
            <p>count0: <a-input v-model:value="watch_MORE0" placeholder="count0" /></p>
            <p>count1: <a-input v-model:value="watch_MORE1" placeholder="count1" /></p>
          </div>
        </p>
      </div>
    </template>
  </eug-card>
</template>

<script>
import { useState } from './index.js'
import { defineComponent, ref, computed, watchEffect, reactive, watch, onMounted } from 'vue'
export default defineComponent({
  props: {
    item: Object
  },
  setup (_, ctx) {
    const computed_count_d_A = ref(1)
    const computed_countA = computed(() => computed_count_d_A.value * 2)
    const Add_count_d_A = () => {
      computed_count_d_A.value ++
    }
    const computed_count_d_B = ref(2)
    const computed_countB = computed({
      get: () => {
        console.log('computed get value', computed_count_d_B.value)
        return computed_count_d_B.value
      },
      set: val => {
        console.log('computed set value', val)
        computed_count_d_B.value = val
      }
    })

    const watchEffect_count_A = ref(1)
    const watchEffect_A = watchEffect(() => console.log('触发watchEffect: ', watchEffect_count_A.value))
    const intervalID = ref(null)
    const useContinueInterval = () => {
      if (intervalID.value) return
      intervalID.value = setInterval(() => {
        if (watchEffect_count_A.value < 10) {
          watchEffect_count_A.value ++
        } else {
          watchEffect_count_A.value = 0
        }
      }, 1000)
    }
    const useCloseInterval = () => {
      clearInterval(intervalID.value)
      intervalID.value = void 0
    }
    // 与watchEffect相比，watch使我们能够： 
    //    1.懒惰地执行副作用； 
    //    2.更具体地说明应触发观察程序重新运行的状态； 
    //    3.访问监视状态的先前值和当前值。
    // 观察者数据源可以是返回值的getter函数，也可以直接是ref
    // getter
    const watch_reactive = reactive({ count: 0 })
    watch(
      () => {
        console.log('获取 watch_reactive.count');
        return watch_reactive.count
      },
      (count, prevCount) => {
        console.log('watch_reactive.count 值变更');
        console.log(count, prevCount)
      }
    )
    // ref
    const watch_ref = ref(0)
    watch(watch_ref, (count, prevCount) => {
      console.log('watch_ref 值变更');
      console.log(count, prevCount)
    })
    // 使用数组方式观察多个来源的变更
    const watch_MORE0 = ref(0)
    const watch_MORE1 = ref(1)
    watch([watch_MORE0, watch_MORE1], ([count0,count1], [prevCount0, prevCount1]) => {
      console.log('触发多源watch')
      console.log([count0,count1], [prevCount0, prevCount1])
    })
    onMounted(() => {
      useContinueInterval()
    })
    return {
      ...useState(_),
      computed_count_d_A,
      computed_countA,
      Add_count_d_A,
      computed_count_d_B,
      computed_countB,
      watchEffect_count_A,
      useCloseInterval,
      useContinueInterval,
      watch_reactive,
      watch_ref,
      watch_MORE0,
      watch_MORE1,
      intervalID
    }
  }
})
</script>

<style module>
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