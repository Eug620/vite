<!--
 * @Author: yeyuhang
 * @Date: 2020-10-19 18:37:30
 * @LastEditTime: 2020-10-27 16:34:38
 * @LastEditors: yeyuhang
 * @Descripttion: 头部注释
-->
<template>
  <a-layout id="components-layout-demo-responsive">
    <a-layout-sider
      :collapsed="collapsed"
      :trigger="null"
      breakpoint="lg"
      collapsible
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
          <a-col :span="2" :offset="0">
             <menu-unfold-outlined
                v-if="collapsed"
                class="trigger"
                @click="() => (collapsed = !collapsed)"
              />
              <menu-fold-outlined v-else class="trigger" @click="() => (collapsed = !collapsed)" />
          </a-col>
          <a-col :span="22" :offset="0" class="eug-layout-header-msg">
            <a-breadcrumb>
              <a-breadcrumb-item href="/">
                <home-outlined />
              </a-breadcrumb-item>
              <a-breadcrumb-item href="activedMenu[0]">
                <span>{{activedMenu[0].replace('/', '')}}</span>
              </a-breadcrumb-item>
            </a-breadcrumb>
          </a-col>
        </a-row>
      </a-layout-header>
      <a-layout-content :style="{ margin: '10px' }">
        <router-view></router-view>
      </a-layout-content>
      <a-layout-footer style="textAlign: center">
        <!-- Vue3 + vite + Antd -->
        <a href="https://github.com/Eug620/vite">EUG</a> 
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>
<script>
import { toRefs, onMounted, watch } from 'vue'
import { RouterView, RouterLink, useRoute } from 'vue-router'
import { GithubOutlined, HomeOutlined, MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons-vue'
import { useState, onCollapse, onBreakpoint, useHandleMenuClick, useHandleMenuSelect, useRouteConfig } from './index.js'
export default {
  name: 'home',
  components: {
    RouterLink,
    RouterView,
    GithubOutlined,
    HomeOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined
  },
  setup (_, ctx) {
    const state = useState()
    useRouteConfig(_, ctx, state)
    // onMounted(() => {
    //   console.log('onMounted')
    // })
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
