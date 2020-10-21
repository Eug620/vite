import { reactive, watch } from "vue"
import { useStore } from 'vuex'
import { useRoute, useRouter } from "vue-router"
export const useState = () => {
  const state = reactive({
      store: useStore(),
      router: useRouter(),
      ROUTER_LIST: [],
      activedMenu: [],
      collapsed: true
  })
  const router = useRouter()
  const { path } = router.currentRoute.value
  state.ROUTER_LIST = router.getRoutes().filter(routeItem => !routeItem.redirect)
  state.activedMenu = [ path ]
  return state
}
export const useRouteConfig = (_, ctx, state) => {
  const route = useRoute()
  watch(
    () => route.path,
    async newPath => {
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