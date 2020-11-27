// 定义 action 枚举
import { handleActions as createReducer } from 'redux-actions'
import { increment, decrement } from './actions/counter'

// 约束 state
export interface CountState {
  count: number
}

// 初始 state
const initialState: CountState = {
  count: 0,
}

const handleIncrement = (state: CountState, action: any): CountState => ({
  count: state.count + action.payload,
})
const handleDecrement = (state: CountState, action: any): CountState => ({
  count: state.count - action.payload,
})

// 导出当前model的 reducer 函数
const counter = createReducer(
  {
    [increment as any]: handleIncrement,
    [decrement as any]: handleDecrement,
  },
  initialState
)

export { counter }

// ------------- KEEP For saga and thunk
export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'
export const INCREMENT_ASYNC = 'increment_async'

// 约束 action
export interface Action {
  type: typeof INCREMENT | typeof DECREMENT | typeof INCREMENT_ASYNC
  payload: number
}
