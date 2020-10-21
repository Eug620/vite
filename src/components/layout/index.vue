<!--
 * @Author: yeyuhang
 * @Date: 2020-10-19 18:37:30
 * @LastEditTime: 2020-10-21 12:51:12
 * @LastEditors: yeyuhang
 * @Descripttion: 头部注释
-->
<template>
  <a-layout id="components-layout-demo-responsive">
    <a-layout-sider
      breakpoint="lg"
      collapsed-width="0"
      @collapse="onCollapse"
      @breakpoint="onBreakpoint"
    >
      <div class="logo" />
      <a-menu theme="dark" mode="inline" :defaultSelectedKeys="activedMenu" @select="useHandleMenuSelect">
        <a-menu-item :key="item.name" v-for="item in ROUTER_LIST" :title="item.name">
          <!-- <GithubOutlined /> -->
          {{item.name}}
          <router-link :to="'/' + item.path"/>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header :style="{ background: '#fff', padding: 0 }" />
      <a-layout-content :style="{ margin: '24px 16px 0' }">
        <div :style="{ padding: '24px', background: '#fff', minHeight: '360px' }">
          <router-view></router-view>
        </div>
      </a-layout-content>
      <a-layout-footer style="textAlign: center">
        Ant Design ©2018 Created by Ant UED
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>
<script>
import { toRefs, onMounted, watch } from 'vue'
import { RouterView, RouterLink, useRoute } from "vue-router"
import { GithubOutlined } from '@ant-design/icons-vue'
import { useState, onCollapse, onBreakpoint, useHandleMenuClick, useHandleMenuSelect, useRouteConfig } from './index.js'
export default {
  name: 'home',
  components: {
    RouterLink,
    RouterView,
    GithubOutlined
  },
  setup (_, ctx) {
    const state = useState()
    useRouteConfig(_, ctx, state)
    onMounted(() => {
      console.log('onMounted')
    })
    return {
      ...toRefs(state),
      onCollapse,
      onBreakpoint,
      useHandleMenuClick,
      useHandleMenuSelect
    }
  }
  // methods: {
  //   onCollapse(collapsed, type) {
  //     console.log(collapsed, type);
  //   },
  //   onBreakpoint(broken) {
  //     console.log(broken);
  //   },
  // },
};
</script>

<style>
#components-layout-demo-responsive .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}
#components-layout-demo-responsive {
  height: 100%;
}
</style>
