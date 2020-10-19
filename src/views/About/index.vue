<template>
  <div>
    about
    <eug-card>
      <template #header>Composition API</template>
      <template #extra><a href="https://v3.vuejs.org/api/composition-api.html"><LinkOutlined /></a></template>
      <template #description>description</template>
      <template #content>content</template>
    </eug-card>
  </div>
</template>

<script>
import { LinkOutlined } from "@ant-design/icons-vue";
export default {
  components: { 
    LinkOutlined
  }
}
</script>

<style>

</style>