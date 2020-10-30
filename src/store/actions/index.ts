/**
 * 业务组件中使用 actions
 */

import { DECREMENT, DECREMENT_TYPE, INCREMENT, INCREMENT_TYPE } from '../const'

export interface IncrementAction {
  type: INCREMENT_TYPE
}

export interface DecrementAction {
  type: DECREMENT_TYPE
}

//  定义 modifyAction 联合类型, 包含 INCREMENTAction 和 DecrementAction
export type ModifyAction = IncrementAction | DecrementAction

// 增加 state 的方法 返回的格式是 ===> {type: 'INCREMENT'}
export const increment = (): IncrementAction => ({
  type: INCREMENT,
})

// 减少 state 的方法: 返回的格式是 ===> {type: 'DECREMENT'}
export const decrement = (): DecrementAction => ({
  type: DECREMENT,
})
