import { createAction } from 'redux-actions' // 原先的书写形式: () => ({type: 'decrement'})
import { Action } from '../count'

export const increment = createAction('increment') // 原先的书写形式: () => ({type: 'increment'})
export const decrement = createAction('decrement')
// 集中定义 redux 某个 module 的 actions
export const add = (payload: number): Action => ({ type: 'INCREMENT', payload })
