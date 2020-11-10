<!--
 * @Author: yeyuhang
 * @Date: 2020-05-27 01:50:14
 * @LastEditTime: 2020-10-27 17:43:41
 * @LastEditors: yeyuhang
 * @Descripttion: 头部注释
-->
<template>
    <router-view/>
</template>

<script>
import {RouterLink, RouterView} from 'vue-router';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
  components: {
    RouterLink,
    RouterView
  }
})
</script>
<style >
  @import './assets/style/index.css'
</style>
