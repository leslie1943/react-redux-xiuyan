## Redux使用心得


#### 💛💛 reducer 定义阶段 💛💛
- 1.1: 定义常量: 被 约束Action的interface使用,其目的是规定 action的结构
- 1.2: 定义常量: 被 reducer 函数使用, 根据 action.type 处理逻辑, (由于Action结构被约束过, 一定存在type属性, 且value就是定义的常量之一)
- 2:   定义Action interface (IAction), 用来约束 action 的结构
- 3:   定义 action:IAction 来约束
- 4.1: 定义 <ModuleState> 结构, 用于 reducer 函数返回值类型的约束
- 4.2: 定义 <ModuleState> 结构, 用于导出被全局 RootState 使用
```js
    interface RootState {
    model_a: StateA
    model_b: StateB
    }
```
- 5.1: 定义 reducer 函数, 传入初始 state, 传入 action, 定义返回数据类型 <ModuleState>
- 5.2: 根据传入的 action, 处理 reducer 函数逻辑, 完成 state 更新

#### 💛💛 业务组件阶段 💛💛

- 6:   在组件中定义 Props, 用来约束组件接受的 Props 数据结构
- 7:   定义 mapStateToProps 函数, 将 全局 Store下的 state 映射出来
```js
// 左侧属性可以自定义: 右侧的属性是 module下的
    const mapStateToProps = (state: RootState) => {
        return {
            fontSize: state.config.fontSize,
            color: state.config.color,
            name: state.calulate.name,
            age: state.calulate.age,
        }
    }
```
- 8:  定义 mapDispatchToProps, 将 action 映射出来
```js
// 使用 dispatch来触发 action 可以影响到 reducer 模块下对应的函数,进而更新 模块下的 state
    const mapDispatchToProps = (dispath: Dispatch) => ({
        toLight: () => dispath(lightAction),
        toDark: () => dispath(darkAction),
    })
```
- 9: connect 绑定 并 导出=> 注入到组件的props
```js
    export default connect(mapStateToProps, mapDispatchToProps)(CounterSimple)
```


####  💛💛 Codes 💛💛
- `src/reducers/config.ts`
```ts
export const DARK = 'DARK'
export const LIGHT = 'LIGHT'

type ActionType = typeof DARK | typeof LIGHT

interface IAction {
  type: ActionType
  color: string
}

export const darkAction: IAction = {
  type: DARK,
  color: '#1a1a1a',
}
export const lightAction: IAction = {
  type: LIGHT,
  color: 'teal',
}

// 当前module下的 store 数据结构
export interface ConfigState {
  color: string
  fontSize: number
}

const initConfig = {
  color: 'papayawhip',
  fontSize: 12,
}

const config = (
  state: ConfigState = initConfig,
  action: IAction
): ConfigState => {
  switch (action.type) {
    case DARK:
      return {
        color: action.color,
        fontSize: 14,
      }
    case LIGHT:
      return {
        color: action.color,
        fontSize: 12,
      }
    default:
      return state
  }
}
export { config }
```

- `src/reducers/index.ts`
```ts
import { createStore, combineReducers, Dispatch } from 'redux'
import { calculate, CalculateState } from './calculate'
import { config, ConfigState } from './config'

export interface RootState {
  calculate: CalculateState
  config: ConfigState
}

// 全局可以创建多个 reducer 在这里统一在一起
const rootReducer = combineReducers({ calculate, config })

/***
 * 🔯🔯🔯🔯 Redux Step-1: 通过 createStore 完成 store 对象的创建
 * # 语法:
 * createStore({reducer,initial_state, applyMiddleware})
 */
export const store = createStore(rootReducer)

// Dispatch 的 类型别名
export type ReduxDispatch = Dispatch

```

- `src/components/biz.tsx`
```tsx
import React from 'react'
import { darkAction, lightAction } from '../reducers/config'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { RootState } from '../reducers/index'

interface Props {
  color: string
  fontSize: number
  toLight: () => any
  toDark: () => any
}

class CounterSimple extends React.Component<Props, any> {
  render() {
    const btnStyle = {
      marginRight: 10,
    }
    const divStyle = {
      padding: 100,
      backgroundColor: this.props.color,
      fontSize: this.props.fontSize,
    }
    return (
      <div style={divStyle}>
        <button style={btnStyle} onClick={this.props.toLight}>
          To Light
        </button>
        <button style={btnStyle} onClick={this.props.toDark}>
          To Dark
        </button>
        <p>{this.props.color}</p>
        <p>{this.props.fontSize}</p>
      </div>
    )
  }
}

// 将 state 映射到 组件的 props
// 左侧属性可以自定义: 右侧的属性是 module下的
const mapStateToProps = (state: RootState) => {
  return {
    fontSize: state.config.fontSize,
    color: state.config.color,
  }
}

// 将 action 映射到 组件的 props
// 使用 dispatch来触发 action 可以影响到 reducer 模块下对应的函数,进而更新 模块下的 state
const mapDispatchToProps = (dispath: Dispatch) => ({
  toLight: () => dispath(lightAction),
  toDark: () => dispath(darkAction),
})

// 注入到组件的props
export default connect(mapStateToProps, mapDispatchToProps)(CounterSimple)

```

- `src/index.js`
```js
import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import App from './App'
import * as serviceWorker from './serviceWorker'

// below 2 import sentences for Redux
import { Provider } from 'react-redux'
import { store } from './reducers' // 引入全局的reducers(store: 单一数据源)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()

```