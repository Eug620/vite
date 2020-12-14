<!--
 * @Author: yeyuhang
 * @Date: 2020-12-14 15:39:43
 * @LastEditTime: 2020-12-14 17:37:13
 * @LastEditors: yeyuhang
 * @Descripttion: 头部注释
-->
<template>
  <div class="eug-bulma-test">
    <a-button type="primary" @click="useGetUser(state)">{{name}}</a-button>
    <p v-for="(item, idx) in userList" :key="idx">{{ item }}</p>
  </div>
</template>

<script>
import { useState, useGetUser } from "./index.js";
import { toRefs } from 'vue';

export default {
  components: {
    // BulmaCard
  },
  setup(_, ctx) {
    const state = useState()
    return {
      state,
      ...toRefs(state),
      useGetUser
    }
  }
};
</script>

<style>
</style>