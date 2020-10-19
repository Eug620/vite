import { reactive } from 'vue'
export const useState = () => {
  const state = reactive({
    loading: false
  })
  return state
}