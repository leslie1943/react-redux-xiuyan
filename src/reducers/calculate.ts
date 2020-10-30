/**
 * 🔯🔯🔯🔯 Redux Step-2: 定义 reducer
 * reducer for calculate module
 */

// 下面2个常量是为在 reducer 函数中 判断Action类型 所用
export const INCREMENT = 'INCREMENT'
export const REDUCE = 'REDUCE'

// 接口用来约束 reducer 函数 的 action 参数
interface IAction {
  type: typeof INCREMENT | typeof REDUCE
  count: number
}

/**
 * 🔯🔯🔯🔯 Redux Step-3: 定义 action
 * action的作用是通知 reducer => 让改变发生: 要想让state发生改变,就必须用正确的action来驱动这个改变
 * 下面2个常量是定义 action 结构的, 在 业务组件中使用
 */
export const incrementAction: IAction = {
  type: INCREMENT,
  count: 1,
}

export const reduceAction: IAction = {
  type: REDUCE,
  count: 1,
}

/**
 * 模块 Calculate 的 state
 * 分别用于 reducer 函数 和 全局 State
 */
export interface CalculateState {
  num: number
  les: string
}

const initData = {
  les: '',
  num: 0,
}

/**
 * 🔯🔯🔯🔯 Redux Step-2: 定义 reducer
 * @param state: 模块的store
 * @param action: 可接受的action, 结构 {type: 'xxxxx', payload: any}
 */
/**
 * function calculate(state,action){
 *  // some logic
 *  return latest_state
 * }
 */
const calculate = (
  state: CalculateState = initData,
  action: IAction
): CalculateState => {
  // debugger
  switch (action.type) {
    case INCREMENT:
      return {
        num: state.num + action.count,
        les: (Math.random() * 10000000).toString().slice(0, 6),
      }
    case REDUCE:
      return {
        num: state.num - action.count > 0 ? state.num - action.count : 0,
        les: (Math.random() * 10000000).toString().slice(0, 6),
      }
    default:
      return state
  }
}

export { calculate }
