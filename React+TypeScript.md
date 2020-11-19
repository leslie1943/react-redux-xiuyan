#### 添加 TypeScript
- 新项目中
```bash
$ npx create-react-app my-app --typescript
$ # 或者
$ yarn create react-app my-app --typescript
```
- 已有项目中
```bash
$ npm install --save typescript @types/node @types/react @types/react-dom @types/jest
$ # 或者
$ yarn add typescript @types/node @types/react @types/react-dom @types/jest
```

#### 添加 sass 
```bash
$ npm install node-sass --save
$ # or
$ yarn add node-sass
```

#### React.Component()
- 声明不需要 `props`的组件
```js
// interface AppProps {} // ❌❌ 不需要定义组件的Props约束
interface AppState {
  title: string
  name?: string
}
// 第一种方式: Props约束接受 null, State正常接受
class App extends React.Component<null, AppState> {
    constructor(props: null) {
        super(props)
        this.state = { title: 'parent title', name: 'leslie' }
    }
}

// 第二种方式: 只接受State约束
class App extends React.Component<AppState> {
  readonly state = {
    title: 'parent title',
  }
  // 修改Title
  handleChangeTitle = (newTitle: string = 'parent title'): void => {
    this.setState({
      title: newTitle,
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="parent-border">
            {`【parent title state】: ${this.state.title}`}
            <p className="child-container">
              <button onClick={() => this.handleChangeTitle()}>重置state</button>
            </p>
          </div>
        </header>
      </div>
    )
  }
}

export default App
```

- 声明需要 `props`的组件
```js
interface AppProps {
  name: string
}
interface AppState {
  title: string
  name: string
}

class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props)
    this.state = { title: 'parent title', name: 'leslie' }
  }

  handleChangeTitle = (newTitle: string = 'parent title'): void => {
    this.setState({
      title: newTitle,
    })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="parent-border">
            {`【parent title state】: ${this.state.title}`}
            <p className="child-container">
              <button onClick={() => this.handleChangeTitle()}>重置state</button>
            </p>
          </div>
        </header>
      </div>
    )
  }
}
export default App
```


#### babel config
```json
{
  "presets": [
    "@babel/preset-env",
    "@babel/preset-react"
  ],
  "plugins": [
    [
      "@babel/plugin-transform-runtime", {
        "helpers": true
      }
    ]
  ]
```

#### Redux
- 1- 组件通过 dispatch 方法 触发 action
- 2- Store 接收 action 并将 Action 分发给 reducer
- 3- Reducer 根据 Action 的类型对状态进行更改并将更改后的状态返回给 Store
- 4- 组件订阅 Store 中的状态, Store中状态更新会同步到组件


#### React-redux
```js
import { connect } from 'react-redux'

// 将 state 映射到 组件的 props
// 左侧属性可以自定义: 右侧的属性是 module下的
const mapStateToProps = (state: RootState) => {
  return {
    num: state.calculate.num,
    color: state.calculate.color,
  }
}
// 💛💛💛 >>>>>>>>>>>>>>>>>>>  使用 常规方式 将 action 映射到 props
const mapDispatchToProps = (dispath: Dispatch) => ({
  increment: () => dispath(incrementAction),
  decrement: () => dispath(reduceAction),
})
```


#### bindActionCreators
```js
// 💛💛💛 >>>>>>>>>>>>>>>>>>> 使用 bindActionCreators 将 action 映射到 props
// 前提是集中定义actions
import { INCREMENT, DECREMENT } from '../count'
export const addC = () => ({ type: INCREMENT })
export const reduceC = () => ({ type: DECREMENT })
// 引入定义的actions, 传递给 bindActionCreators
import * as counterActions from '../../reducers/actions/counter'
const mapDispatchToProps = (dispatch: ReduxDispatch) => bindActionCreators(counterActions,dispatch)

// 💛💛💛 >>>>>>>>>>>>>>>>>>> 使用 bindActionCreators 和 常规方式 将 action 映射到 props
// 前提是集中定义actions
import { INCREMENT, DECREMENT } from '../count'
export const addC = () => ({ type: INCREMENT })
export const reduceC = () => ({ type: DECREMENT })

// 引入定义的actions, 传递给 bindActionCreators
import * as counterActions from '../../reducers/actions/counter'
const mapDispatchToProps = (dispatch: ReduxDispatch) => ({
  add: () => dispatch(incrementAction),
  reduce: () => dispatch(decrementAction),
  ...bindActionCreators(counterActions, dispatch),
})



// 注入到组件的props
// connect的作用(1): 订阅 store, 当 store 的状态发生变化, 会重新渲染组件
// connect的作用(2): 获取store中的状态, 将状态通过组件的 props 属性 映射给组件
// connect的作用(3): 获取 dispatch 方法 => 在组件中可以使用 props.dispatch 了
// 语法: connect()()
export default connect(mapStateToProps, mapDispatchToProps)(CounterSimple)
```


#### action 接收参数 in TypeScript
- 1- 在`Action`接口约束中添加参数
```js
export interface Action {
  type: typeof INCREMENT | typeof DECREMENT
  payload: number // 🧡
}
```
- 2 在 具体的 action 中添加 payload形参, 返回体中添加属性
```js
import { INCREMENT, DECREMENT } from '../count'
export const addc = (payload: number) => ({ type: INCREMENT, payload })
export const reduce = (payload: number) => ({ type: DECREMENT, payload })

```

- 3 在 module 的reducer中处理 payload
```js
const counter = (
  state: CountState = { count: 0 },
  action: Action
): CountState => {
  switch (action.type) {
    case INCREMENT:
      return {
        count: state.count + (action.payload ? action.payload : 0),
      }
    case DECREMENT:
      return {
        count: state.count - (action.payload ? action.payload : 0),
      }
    default:
      return state
  }
}
```