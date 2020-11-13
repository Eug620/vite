<!--
 * @Author: yeyuhang
 * @Date: 2020-11-11 15:23:56
 * @LastEditTime: 2020-11-13 16:50:47
 * @LastEditors: yeyuhang
 * @Descripttion: 头部注释
-->
<template>
  <div class="eug-bulma-tabs">
    <!-- default -->
    <bulma-card :title="`default------active: ${defaults}`">
      <template #content>
        <div class="tabs">
          <ul>
            <li :class="defaults === item ? 'is-active':''" v-for="item in list" :key="item" @click="defaults = item"><a>{{item}}</a></li>
          </ul>
        </div>
      </template>
    </bulma-card>
    <!-- center -->
    <bulma-card :title="`center------active: ${center}`">
      <template #content>
        <div class="tabs is-centered">
          <ul>
            <li :class="center === item ? 'is-active':''" v-for="item in list" :key="item" @click="center = item"><a>{{item}}</a></li>
          </ul>
        </div>
      </template>
    </bulma-card>
    <!-- right -->
    <bulma-card :title="`right------active: ${right}`">
      <template #content>
        <div class="tabs is-right">
          <ul>
            <li :class="right === item ? 'is-active':''" v-for="item in list" :key="item" @click="right = item"><a>{{item}}</a></li>
          </ul>
        </div>
      </template>
    </bulma-card>
    <!-- icons -->
    <bulma-card :title="`icons------active: ${icons}`">
      <template #content>
        <div class="tabs is-centered">
          <ul>
            <li :class="icons === item ? 'is-active' : ''" v-for="(item, idx) in list" :key="item" @click="icons = item">
              <a>
                <span class="icon is-small">
                  <component :is="iconList[idx]"/>
                </span>
                <span>{{item}}</span>
              </a>
            </li>
          </ul>
        </div>
      </template>
    </bulma-card>
    <!-- small -->
    <bulma-card :title="`small------active: ${small}`">
      <template #content>
        <div class="tabs is-small">
          <ul>
            <li :class="small === item ? 'is-active' : ''" v-for="item in list" :key="item" @click="small = item"><a>{{item}}</a></li>
          </ul>
        </div>
      </template>
    </bulma-card>
    <!-- medium -->
    <bulma-card :title="`medium------active: ${medium}`">
      <template #content>
        <div class="tabs is-medium">
          <ul>
            <li :class="medium === item ? 'is-active' : ''" v-for="item in list" :key="item" @click="medium = item"><a>{{item}}</a></li>
          </ul>
        </div>
      </template>
    </bulma-card>
    <!-- large -->
    <bulma-card :title="`large------active: ${large}`">
      <template #content>
        <div class="tabs is-large">
          <ul>
            <li :class="large === item ? 'is-active' : ''" v-for="item in list" :key="item" @click="large = item"><a>{{item}}</a></li>
          </ul>
        </div>
      </template>
    </bulma-card>
    <!-- styles -->
    <bulma-card :title="`styles------active: ${styles}`">
      <template #content>
        <div class="tabs is-boxed">
          <ul>
            <li :class="styles === item ? 'is-active' : ''" v-for="(item, idx) in list" :key="item" @click="styles = item">
              <a>
                <span class="icon is-small">
                  <component :is="iconList[idx]"/>
                </span>
                <span>{{item}}</span>
              </a>
            </li>
          </ul>
        </div>
      </template>
    </bulma-card>
    <!-- toogle -->
    <bulma-card :title="`toogle------active: ${toogle}`">
      <template #content>
        <div class="tabs is-toggle">
          <ul>
            <li :class="toogle === item ? 'is-active' : ''"  v-for="(item, idx) in list" :key="item" @click="toogle = item">
              <a>
                <span class="icon is-small">
                  <component :is="iconList[idx]"/>
                </span>
                <span>{{item}}</span>
              </a>
            </li>
          </ul>
        </div>
      </template>
    </bulma-card>
    <!-- rounded -->
    <bulma-card :title="`rounded------active: ${rounded}`">
      <template #content>
        <div class="tabs is-toggle is-toggle-rounded">
          <ul>
            <li :class="rounded === item ? 'is-active' : ''"  v-for="(item, idx) in list" :key="item" @click="rounded = item">
              <a>
                <span class="icon is-small">
                  <component :is="iconList[idx]"/>
                </span>
                <span>{{item}}</span>
              </a>
            </li>
          </ul>
        </div>
      </template>
    </bulma-card>
    <!-- fullwidth -->
    <bulma-card title="fullwidth">
      <template #content>
        <div class="tabs is-fullwidth">
          <ul>
            <li>
              <a>
                <span class="icon"><i class="fas fa-angle-left" aria-hidden="true"></i></span>
                <span>Left</span>
              </a>
            </li>
            <li>
              <a>
                <span class="icon"><i class="fas fa-angle-up" aria-hidden="true"></i></span>
                <span>Up</span>
              </a>
            </li>
            <li>
              <a>
                <span>Right</span>
                <span class="icon"><i class="fas fa-angle-right" aria-hidden="true"></i></span>
              </a>
            </li>
          </ul>
        </div>
      </template>
    </bulma-card>
    <!-- boxed -->
    <bulma-card title="boxed">
      <template #content>
        <div class="tabs is-centered is-boxed">
          <ul>
            <li class="is-active">
              <a>
                <span class="icon is-small"><i class="fas fa-image" aria-hidden="true"></i></span>
                <span>Pictures</span>
              </a>
            </li>
            <li>
              <a>
                <span class="icon is-small"><i class="fas fa-music" aria-hidden="true"></i></span>
                <span>Music</span>
              </a>
            </li>
            <li>
              <a>
                <span class="icon is-small"><i class="fas fa-film" aria-hidden="true"></i></span>
                <span>Videos</span>
              </a>
            </li>
            <li>
              <a>
                <span class="icon is-small"><i class="far fa-file-alt" aria-hidden="true"></i></span>
                <span>Documents</span>
              </a>
            </li>
          </ul>
        </div>
      </template>
    </bulma-card>
    <!-- toggle-fullwidth -->
    <bulma-card title="toggle-fullwidth">
      <template #content>
        <div class="tabs is-toggle is-fullwidth">
          <ul>
            <li class="is-active">
              <a>
                <span class="icon is-small"><i class="fas fa-image" aria-hidden="true"></i></span>
                <span>Pictures</span>
              </a>
            </li>
            <li>
              <a>
                <span class="icon is-small"><i class="fas fa-music" aria-hidden="true"></i></span>
                <span>Music</span>
              </a>
            </li>
            <li>
              <a>
                <span class="icon is-small"><i class="fas fa-film" aria-hidden="true"></i></span>
                <span>Videos</span>
              </a>
            </li>
            <li>
              <a>
                <span class="icon is-small"><i class="far fa-file-alt" aria-hidden="true"></i></span>
                <span>Documents</span>
              </a>
            </li>
          </ul>
        </div>
      </template>
    </bulma-card>
    <!-- boxed-medium -->
    <bulma-card title="boxed-medium">
      <template #content>
        <div class="tabs is-centered is-boxed is-medium">
          <ul>
            <li class="is-active">
              <a>
                <span class="icon is-small"><i class="fas fa-image" aria-hidden="true"></i></span>
                <span>Pictures</span>
              </a>
            </li>
            <li>
              <a>
                <span class="icon is-small"><i class="fas fa-music" aria-hidden="true"></i></span>
                <span>Music</span>
              </a>
            </li>
            <li>
              <a>
                <span class="icon is-small"><i class="fas fa-film" aria-hidden="true"></i></span>
                <span>Videos</span>
              </a>
            </li>
            <li>
              <a>
                <span class="icon is-small"><i class="far fa-file-alt" aria-hidden="true"></i></span>
                <span>Documents</span>
              </a>
            </li>
          </ul>
        </div>
      </template>
    </bulma-card>
    <!-- toggle-fullwidth-large -->
    <bulma-card title="toggle-fullwidth-large">
      <template #content>
        <div class="tabs is-toggle is-fullwidth is-large">
          <ul>
            <li class="is-active">
              <a>
                <span class="icon"><i class="fas fa-image" aria-hidden="true"></i></span>
                <span>Pictures</span>
              </a>
            </li>
            <li>
              <a>
                <span class="icon"><i class="fas fa-music" aria-hidden="true"></i></span>
                <span>Music</span>
              </a>
            </li>
            <li>
              <a>
                <span class="icon"><i class="fas fa-film" aria-hidden="true"></i></span>
                <span>Videos</span>
              </a>
            </li>
            <li>
              <a>
                <span class="icon"><i class="far fa-file-alt" aria-hidden="true"></i></span>
                <span>Documents</span>
              </a>
            </li>
          </ul>
        </div>
      </template>
    </bulma-card>
  </div>
</template>
<script>
import BulmaCard from '../bulma-card/index.vue'
import { useState } from './index.js'
export default {
  components: {
    BulmaCard
  },
  setup () {
    return {
      ...useState()
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "bulma/css/bulma.css";
</style>
