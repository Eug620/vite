<!--
 * @Author: yeyuhang
 * @Date: 2020-10-26 15:23:40
 * @LastEditTime: 2020-10-27 17:49:40
 * @LastEditors: yeyuhang
 * @Descripttion: 头部注释
-->
<template>
  <eug-card ref="ref_count_ref" showHeader :header="name" bordered hoverable showExtra :extra="extra">
    <template #content>
      <div v-for="item in apiList" :key="item.apiTitle" class="eug-api-box">
        <span class="code">{{item.apiTitle}}</span><br>
        <p class="eug-api-descripttion eug-api-box"><i>{{item.descripttion}}</i></p>
      </div>
    </template>
    <template #description>
      <input v-model="customRef_text" />
    </template>
  </eug-card>
</template>

<script>
import { useState } from './index.js'
import { ref, unref, reactive, toRef, toRefs, isRef, customRef, shallowRef, isReactive, triggerRef, watchEffect, defineComponent } from 'vue';
export default defineComponent({
  props: {
    item: Object
  },
  setup (_, ctx) {
    /**
     * 实验API
     */
    console.log('ref--------------------');
    const ref_count = ref(0)
    console.log('ref_count', ref_count.value);
    ref_count.value ++
    console.log('ref_count', ref_count.value);
    const ref_count_ref = ref(0)
    console.log(ref_count_ref);

    console.log('unref--------------------');
    const unref_countA = ref(1)
    const unref_countB = 1
    console.log('unRef_countA', unref(unref_countA));
    console.log('unRef_countB', unref(unref_countB));

    console.log('toRef--------------------');
    const toRef_reactive = reactive({
      foo: 1,
      bar: 2
    })
    console.log('toRef_reactive.foo', toRef_reactive.foo);
    const toRef_fooRef = toRef(toRef_reactive, 'foo')
    console.log('toRef_fooRef', toRef_fooRef.value);
    toRef_fooRef.value ++
    console.log('toRef_fooRef',toRef_fooRef.value);
    console.log('toRef_reactive.foo',toRef_reactive.foo);
    toRef_reactive.foo ++
    console.log('toRef_fooRef',toRef_fooRef.value);
    console.log('toRef_reactive.foo',toRef_reactive.foo);

    console.log('toRefs--------------------');
    // 当从合成函数返回响应式对象时，toRefs 非常有用，这样消费组件就可以在不丢失响应性的情况下对返回的对象进行分解/扩散
    const toRefs_state = reactive({
      foo: 1,
      bar: 2
    })
    const toRefs_stateAsRefs = toRefs(toRefs_state)
    console.log('toRefs_stateAsRefs.foo.value', toRefs_stateAsRefs.foo.value);
    toRefs_state.foo ++
    console.log('toRefs_stateAsRefs.foo.value', toRefs_stateAsRefs.foo.value);
    toRefs_stateAsRefs.foo.value ++
    console.log('toRefs_state.foo', toRefs_state.foo);
    // toRefs转换后的reactive,解构操作不会使其失去响应式
    console.log('isRef--------------------');
    const isRef_is = ref(123)
    const isRef_no = 123
    const isRef_rn = reactive({
      foo: 1
    })
    console.log('isRef_is', isRef(isRef_is));
    console.log('isRef_no', isRef(isRef_no));
    console.log('isRef_rn', isRef(isRef_rn));
    
    console.log('customRef--------------------');
    // 使用 v-model 使用自定义 ref 实现 debounce 的示例
    const customRef_useDebouncedRef = (value, delay = 200) => {
      let timeout
      return customRef((track, trigger) => {
        return {
          get() {
            track()
            console.log('get');
            return value
          },
          set(newValue) {
            clearTimeout(timeout)
            timeout = setTimeout(() => {
              console.log('set');
              value = newValue
              trigger()
            }, delay)
          }
        }
      })
    }

    console.log('shallowRef--------------------');
    const shallowRef_foo = shallowRef({})
    // 改变 ref 的值是响应式的
    shallowRef_foo.value = {}
    // 但是这个值不会被转换。
    isReactive(shallowRef_foo.value) // false

    console.log('triggerRef--------------------');
    const triggerRef_shallow = shallowRef({
      greet: 'Hello, world'
    })
    // 第一次运行时记录一次 "Hello, world"
    watchEffect(() => {
      console.log(triggerRef_shallow.value.greet)
    })
    // 这不会触发作用，因为 ref 很浅层
    triggerRef_shallow.value.greet = 'Hello, universe'
    // 记录 "Hello, universe"
    triggerRef(triggerRef_shallow)
    
    return {
      ...useState(_),
      customRef_text: customRef_useDebouncedRef('hello, customRef!')
    }
  }
})
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