/**
 * 操作 state 的地方
 */
import { ModifyAction } from '../actions'
import { DECREMENT, INCREMENT } from '../const'

// state定义的是状态数据
export default (state = 0, action: ModifyAction): number => {
  switch (action.type) {
    case DECREMENT:
      return state > 0 ? state - 1 : 0
    case INCREMENT:
      return state + 1
    default:
      return state
  }
}

/**
 * dispatch派发 -> action 行为 -> reducer 改变状态 -> store
 */
