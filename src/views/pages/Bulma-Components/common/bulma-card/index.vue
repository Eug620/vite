<!--
 * @Author: yeyuhang
 * @Date: 2020-11-13 15:27:15
 * @LastEditTime: 2020-11-13 15:33:11
 * @LastEditors: yeyuhang
 * @Descripttion: 头部注释
-->
<template>
  <div class="card">
    <header class="card-header">
        <p class="card-header-title">
        {{title}}
        </p>
        <a href="#" class="card-header-icon" aria-label="more options">
        <span class="icon">
            <i class="fas fa-angle-down" aria-hidden="true"></i>
        </span>
        </a>
    </header>
    <div class="card-content">
        <div class="content">
        <slot name="content"/>
        </div>
    </div>
    <footer class="card-footer">
        <a class="card-footer-item">Save</a>
        <a class="card-footer-item">Edit</a>
        <a class="card-footer-item">Delete</a>
    </footer>
    </div>
</template>

<script>
export default {
  name: 'bulma-card',
  props: {
    title: String
  }
}
</script>

<style lang="scss" scoped>
  @import "bulma/css/bulma.css";
  .card {
      margin: 20px;
  }
</style>
