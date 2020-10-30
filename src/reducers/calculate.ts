/**
 * 🔯🔯🔯🔯 Redux Step-2: 定义 reducer
 * reducer for calculate module
 */

// 下面2个常量是为在 reducer 函数中 判断Action类型 所用
export const INCREMENT = 'INCREMENT'
export const REDUCE = 'REDUCE'

// 下面2个常量是定义 action 结构的, 在 业务组件中使用
export const incrementAction = {
  type: INCREMENT,
  count: 1,
}

export const reduceAction = {
  type: REDUCE,
  count: 1,
}

/**
 * 模块 Calculate 的 state
 * 分别用于 reducer 函数 和 全局 State
 */
export interface CalculateState {
  num: number
}

// 接口用来约束 reducer 函数 的 action 参数
interface Action {
  type: string
  count: number
}

const initData = {
  num: 0,
}

// reducer 是一个函数
/**
 * function calculate(state,action){
 *  return update_state
 * }
 */
const calculate = (
  state: CalculateState = initData,
  action: Action
): CalculateState => {
  switch (action.type) {
    case INCREMENT:
      return { num: state.num + action.count }
    case REDUCE:
      return {
        num: state.num - action.count > 0 ? state.num - action.count : 0,
      }
    default:
      return state
  }
}

export { calculate }
