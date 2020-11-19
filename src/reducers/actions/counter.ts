import { INCREMENT, DECREMENT, Action } from '../count'

// 集中定义 redux 某个 module 的 actions
export const add = (payload: number): Action => ({ type: INCREMENT, payload })
export const reduce = (payload: number): Action => ({
  type: DECREMENT,
  payload,
})
