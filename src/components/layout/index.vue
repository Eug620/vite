<!--
 * @Author: yeyuhang
 * @Date: 2020-10-19 18:37:30
 * @LastEditTime: 2020-10-21 17:06:56
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
        <a-menu-item :key="item.path" v-for="item in ROUTER_LIST" :title="item.name">
          <!-- <GithubOutlined /> -->
          {{item.name}}
          <router-link :to="item.path"/>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header :style="{ background: '#fff', padding: 0 }">
        <a-row class="eug-layout-header">
          <a-col :span="12" :offset="0">
            <a-breadcrumb>
              <a-breadcrumb-item href="/">
                <home-outlined />
              </a-breadcrumb-item>
              <a-breadcrumb-item href="activedMenu[0]">
                <span>{{activedMenu[0].replace('/', '')}}</span>
              </a-breadcrumb-item>
              <a-breadcrumb-item>
                Application
              </a-breadcrumb-item>
            </a-breadcrumb>
          </a-col>
        </a-row>
      </a-layout-header>
      <a-layout-content :style="{ margin: '10px' }">
        <eug-card bordered :style="{ height: '100%' }">
          <template #content>
            <router-view></router-view>
          </template>
        </eug-card>
      </a-layout-content>
      <a-layout-footer style="textAlign: center">
        <!-- Vue3 + vite + Antd -->
        TEST
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>
<script>
import { toRefs, onMounted, watch } from 'vue'
import { RouterView, RouterLink, useRoute } from 'vue-router'
import { GithubOutlined, HomeOutlined } from '@ant-design/icons-vue'
import { useState, onCollapse, onBreakpoint, useHandleMenuClick, useHandleMenuSelect, useRouteConfig } from './index.js'
export default {
  name: 'home',
  components: {
    RouterLink,
    RouterView,
    GithubOutlined,
    HomeOutlined
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
}
</script>

<style  lang="scss">
@import './index.scss'
</style>
