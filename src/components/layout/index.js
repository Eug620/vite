/*
 * @Author: yeyuhang
 * @Date: 2020-10-20 10:17:40
 * @LastEditTime: 2020-10-21 12:50:13
 * @LastEditors: yeyuhang
 * @Descripttion: 头部注释
 */
import { reactive, watch } from "vue"
import { useStore } from 'vuex'
import { useRoute, useRouter } from "vue-router"
export const useState = () => {
    const state = reactive({
        count: 1,
        store: useStore(),
        ROUTER_LIST: [
          '/Composition-API',
          '/Reactivity-API',
        ],
        path: '',
        activedMenu: ['/Composition-API']
    })
    const route = useRoute()
    const router = useRouter()
    state.ROUTER_LIST = router.options.routes[0].children
    state.activedMenu = [route.path]
    return state
}
export const useRouteConfig = (_, ctx, state) => {
    const route = useRoute()
    watch(
      () => route.path,
      async newPath => {
        console.log(_, ctx, state);
        state.activedMenu = [newPath]
      }
    )
}
export const useHandleMenuClick = ({ item, key, keyPath }) => {
    // console.log( item, key, keyPath );
}
export const useHandleMenuSelect = ({ item, key, selectedKeys }) => {
    // console.log({ item, key, selectedKeys });
}
export const onCollapse = () => {

}
export const onBreakpoint = () => {
    
}