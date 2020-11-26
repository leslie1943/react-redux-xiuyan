import { INCREMENT, DECREMENT, Action, INCREMENT_ASYNC } from '../count'
import { ReduxDispatch } from '../index'

// 集中定义 redux 某个 module 的 actions
export const add = (payload: number): Action => ({ type: INCREMENT, payload })
export const reduce = (payload: number): Action => ({
  type: DECREMENT,
  payload,
})

// payload 是组件触发传递的参数
// 返回的是一个函数, 异步函数执行之后,调用dispatch方法触发一个其他的action
// 通过payload 把异步操作的结果传递给其他的action,让其他的action,把这个结果传递给reducer
export const add_async = (payload: number) => (dispatch: ReduxDispatch) => {
  setTimeout(() => {
    dispatch(add(payload))
  }, 2000)
}

// 触发异步的 action
// 它的触发会被 sagaMiddleware 捕获到, 执行相应的 takeEvery 方法
export const increment_async = (payload: number) => ({
  type: INCREMENT_ASYNC,
  payload,
})
