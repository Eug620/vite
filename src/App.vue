<!--
 * @Author: yeyuhang
 * @Date: 2020-05-27 01:50:14
 * @LastEditTime: 2020-10-15 20:05:06
 * @LastEditors: yeyuhang
 * @Descripttion: 头部注释
-->
<template>
  <!-- <HelloWorld msg="Hello Vue 3.0 + Vite" /> -->
  <div>

    <router-link to="/">home</router-link>
    <router-link to="/about">about</router-link>
    <router-view/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import {RouterLink, RouterView} from 'vue-router';

export default {
  name: 'App',
  components: {
    HelloWorld,
    RouterLink,
    RouterView
  }
}
</script>
