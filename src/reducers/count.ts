// 定义 action 枚举
export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'

// 约束 action
export interface Action {
  type: typeof INCREMENT | typeof DECREMENT
  payload: number
}

// 约束 state
export interface CountState {
  count: number
}

// 初始 state
const initialState: CountState = {
  count: 0,
}

const counter = (
  state: CountState = initialState,
  action: Action
): CountState => {
  switch (action.type) {
    case INCREMENT:
      return {
        count: state.count + action.payload || 0,
      }
    case DECREMENT:
      return {
        count: state.count - action.payload || 0,
      }
    default:
      return state
  }
}

export { counter }
