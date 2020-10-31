import { createStore, combineReducers, Dispatch } from 'redux'
import { calculate, CalculateState } from './calculate'
import { config, ConfigState } from './config'
import { todo, TodoState } from './todo'

export interface RootState {
  calculate: CalculateState
  config: ConfigState
  todo: TodoState
}

// 全局可以创建多个 reducer 在这里统一在一起
const rootReducer = combineReducers({ calculate, config, todo })

/***
 * 🔯🔯🔯🔯 Redux Step-1: 通过 createStore 完成 store 对象的创建
 * # 语法:
 * createStore({reducer,initial_state, applyMiddleware})
 */
export const store = createStore(rootReducer)

// Dispatch 的 类型别名
export type ReduxDispatch = Dispatch
