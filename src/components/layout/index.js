import { reactive } from "vue"
import { useStore } from 'vuex'
export const useState = () => {
    const state = reactive({
        count: 1,
        store: useStore(),
        ROUTER_LIST: [
          'Composition-API',
          'Reactivity-API',
        ]
    })
    return state
}
export const useHandleMenuClick = ({ item, key, keyPath }) => {
    // console.log( item, key, keyPath );
}
export const useHandleMenuSelect = ({ item, key, selectedKeys }) => {
    console.log({ item, key, selectedKeys });
}
export const onCollapse = () => {

}
export const onBreakpoint = () => {
    
}