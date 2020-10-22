/*
 * @Author: yeyuhang
 * @Date: 2020-10-19 12:07:52
 * @LastEditTime: 2020-10-22 16:50:27
 * @LastEditors: yeyuhang
 * @Descripttion: 头部注释
 */
import EugCard from './eug-card/index.vue'
import { LinkOutlined } from '@ant-design/icons-vue'
import { Button } from 'ant-design-vue';
export default (common) => {
  common('eug-card', EugCard)
  common('eug-icon-link', LinkOutlined)
  common('eug-button', Button)
}



