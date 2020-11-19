import { INCREMENT, DECREMENT, Action } from '../count'

export const add = (payload: number): Action => ({ type: INCREMENT, payload })
export const reduce = (payload: number): Action => ({
  type: DECREMENT,
  payload,
})
