<!--
 * @Author: yeyuhang
 * @Date: 2020-05-27 01:50:14
 * @LastEditTime: 2020-10-19 18:53:39
 * @LastEditors: yeyuhang
 * @Descripttion: 头部注释
-->
<template>
    <router-view/>
</template>

<script>
import {RouterLink, RouterView} from 'vue-router';

export default {
  name: 'App',
  components: {
    RouterLink,
    RouterView
  }
}
</script>
