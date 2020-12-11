import { Button, Divider } from 'antd'
import React from 'react'
import ReactDOM from 'react-dom'

export default function HooksImplement() {
  const [count, setCount] = useState(1)
  const [name, setName] = useState('su')

  const [acculator, dispatch] = useReducer(reducerFn, 0)

  useEffect(() => {
    console.info('hello useEffect 1')
  }, [count])

  useEffect(() => {
    console.info('hello useEffect 2')
  }, [name])

  return (
    <div id="hooks-imp" style={{ margin: 20 }}>
      <p>{count}</p>
      <Button onClick={() => setCount(count + 1)}>+</Button>
      <Divider />
      <p>{name}</p>
      <Button onClick={() => setName('leslie')}>set name</Button>
      <Divider />
      <p>{acculator}</p>
      <Button type="primary" onClick={() => dispatch({ type: 'increment' })}>
        +
      </Button>
      <Button
        style={{ marginLeft: 10 }}
        type="primary"
        onClick={() => dispatch({ type: 'decrement' })}
      >
        -
      </Button>
    </div>
  )
}

// ----------------------------- 自定义实现 useState -----------------------------
let state: Array<any> = []
let setters: Array<any> = []
let stateIndex = 0

// 创建对应的 setXXX 函数: 闭包的形式
function createSetter(index: number) {
  return function (newState: any) {
    state[index] = newState // index 闭包
    render()
  }
}

// main entry
function useState(initialState: any) {
  // 初始值: 重新渲染时保持值
  state[stateIndex] = state[stateIndex] ? state[stateIndex] : initialState

  // 添加对应的处理函数
  setters.push(createSetter(stateIndex))
  let value = state[stateIndex] // 当前状态值
  let setter = setters[stateIndex] // 处理当前值的方法
  stateIndex++
  // 成对返回
  return [value, setter]
}

// 重新渲染时归0
function render() {
  stateIndex = 0
  effectIndex = 0
  ReactDOM.render(<HooksImplement />, document.getElementById('hooks-imp'))
}

// ----------------------------- 自定义实现 useEffect -----------------------------
let prevDepsAry: any[] = [] // [[count],[name]]
let effectIndex = 0 // 每次重新渲染的时候重置为0, 所以下次对比的
function useEffect(callback: Function, depsAry?: Array<any>) {
  // 判断callback是不是函数.
  if (Object.prototype.toString.call(callback) !== '[object Function]')
    throw new Error('useEffect 的第一个给参数必须是一个函数')

  // 判断 depsAry 有没有传递
  if (typeof depsAry === 'undefined') {
    // 直接调用callback
    callback()
  } else {
    // 判断depsAry是不是数组
    if (Object.prototype.toString.call(depsAry) !== '[object Array]')
      throw new Error('useEffect 的第二个给参数必须是一个数组')

    // 获取上一次的状态值
    let prevDeps = prevDepsAry[effectIndex]

    // 将当前的依赖值和上一次的依赖值做对比, 如果有变化,调用callback
    // prevDeps 的格式 [[1],['su']]  或者 [[2],['su']] 或者 [[1],['leslie']]
    // depsAry 的格式 [1] 或者 ['su']
    let haschanged = prevDeps
      ? depsAry.every((dep, index) => dep === prevDeps[index]) === false
      : true

    // 判断值是否有变化.
    if (haschanged) {
      callback()
    }
    // 同步依赖值
    prevDepsAry[effectIndex] = depsAry // 存储二维数组
    effectIndex++
  }
}

// ----------------------------- 自定义实现 useReducer -----------------------------
function useReducer(reducer: Function, initState: any) {
  // 使用 useState 获取 状态和设置状态的方法
  const [state, setState] = useState(initState)
  // 定义 dispatch,
  function dispatch(action: any) {
    const newState = reducer(state, action)
    setState(newState)
  }
  // 公布出来 state 和 dispatch
  // 通过执行 dispatch 触发 action, 进而执行 reducer 函数
  return [state, dispatch]
}

// reducer 函数
function reducerFn(state: any, action: any) {
  switch (action.type) {
    case 'increment':
      return state + 1
    case 'decrement':
      return state - 1
    default:
      return state
  }
}
