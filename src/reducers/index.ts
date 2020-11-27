import { createStore, combineReducers, Dispatch, applyMiddleware } from 'redux'
import { calculate, CalculateState } from './calculate'
import { config, ConfigState } from './config'
import { todo, TodoState } from './todo'
import { counter, CountState } from './count'
import { modal, ModalState } from './modal'
// import logger from './middleware/logger'
// import test from './middleware/test'
// import thunk from './middleware/thunk'

// import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'
// import counterSaga from './sagas/counter.saga'
import rootSaga from './sagas/root.saga'

// Dispatch 的 类型别名
export type ReduxDispatch = Dispatch
// 创建 sagaMiddleware
const sagaMiddleware = createSagaMiddleware()

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

// 注册中间件: applyMiddleware(middleware name)
// export const store = createStore(rootReducer, applyMiddleware(thunk))
export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))
// 启动 合并的 saga
sagaMiddleware.run(rootSaga)
