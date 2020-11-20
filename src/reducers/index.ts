import { createStore, combineReducers, Dispatch } from 'redux'
import { calculate, CalculateState } from './calculate'
import { config, ConfigState } from './config'
import { todo, TodoState } from './todo'
import { counter, CountState } from './count'
import { modal, ModalState } from './modal'

// RootState 中的定义 和 各个 module 中导出的 reducer 保持一致
// 因为 RootState 只是对各个 store 数据的形状的描述
export interface RootState {
  calculate: CalculateState
  config: ConfigState
  todo: TodoState
  counter: CountState
  modal: ModalState
}

// 全局可以创建多个 reducer 在这里统一在一起
const rootReducer = combineReducers({
  calculate, // {num: number,color: string}
  config, // {color: string, fontSize: number}
  todo, // {items: Array<ItemState>}
  counter, // {count: number}
  modal, //{show: boolean}
})

/***
 * 🔯🔯🔯🔯 Redux Step-1: 通过 createStore 完成 store 对象的创建
 * # 语法:
 * createStore({reducer,initial_state, applyMiddleware})
 */
export const store = createStore(rootReducer)

// Dispatch 的 类型别名
export type ReduxDispatch = Dispatch
