/*
 * @Author: yeyuhang
 * @Date: 2020-10-19 12:07:52
 * @LastEditTime: 2020-11-13 16:21:03
 * @LastEditors: yeyuhang
 * @Descripttion: 头部注释
 */
import EugCard from './eug-card/index.vue'
import { LinkOutlined, TwitterCircleFilled, DingtalkCircleFilled, GitlabFilled, GithubFilled } from '@ant-design/icons-vue'
import { Button } from 'ant-design-vue';
export default (common) => {
  common('eug-card', EugCard)
  common('eug-icon-link', LinkOutlined)
  common('eug-icon-twitter', TwitterCircleFilled)
  common('eug-icon-ding', DingtalkCircleFilled)
  common('eug-icon-gitlab', GitlabFilled)
  common('eug-icon-github', GithubFilled)
  common('eug-button', Button)
}



