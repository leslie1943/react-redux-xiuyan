import React, { useReducer } from 'react'
import { Button } from 'antd'

interface State {
  count: number
}

type Action = { type: 'reset' } | { type: 'increment' } | { type: 'decrement' }

/**
 *
 * @param state : state 数据
 * @param action : 动作
 */
function countReducer(state: State, action: Action): State {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 }
    case 'decrement':
      return { count: state.count - 1 }
    case 'reset':
      return { count: 0 }
    default:
      throw new Error()
  }
}

interface CounterProps {
  initialCount: number
}

/**
 *
 * @param { initialCount } => 函数组件的 props
 */
function Counter({ initialCount }: CounterProps) {
  // React.userReducer 返回 state 和 dispatch
  const [state, dispatch] = useReducer(countReducer, {
    count: initialCount,
  })
  const styleBtn = { marginLeft: 10 }
  return (
    <div style={{ border: '1px solid #fff', padding: 10 }}>
      <p> ####### useReducer demo for count ####### </p>
      <p>useReducer for count: {state.count}</p>
      {/* dispatch后根据执行的type会触发 reducer函数的执行 */}
      <Button style={styleBtn} onClick={() => dispatch({ type: 'increment' })}>
        +
      </Button>
      <Button style={styleBtn} onClick={() => dispatch({ type: 'decrement' })}>
        -
      </Button>
      <Button style={styleBtn} onClick={() => dispatch({ type: 'reset' })}>
        Reset
      </Button>
    </div>
  )
}

export default Counter
