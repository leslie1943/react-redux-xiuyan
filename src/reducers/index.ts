import { createStore, combineReducers } from 'redux'
import { calculate, CalculateState } from './calculate'

export interface RootState {
  calculate: CalculateState
}

// 全局可以创建多个 reducer 在这里统一在一起
const rootReducer = combineReducers({ calculate })

/***
 * 🔯🔯🔯🔯 Redux Step-1: 通过 createStore 完成 store 对象的创建
 * # 语法:
 * createStore({reducer,initial_state, applyMiddleware})
 */
export const store = createStore(rootReducer)
