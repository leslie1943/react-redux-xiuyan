import * as React from 'react'
interface State {
  count: number
}

type Action = { type: 'reset' } | { type: 'increment' } | { type: 'decrement' }

/**
 *
 * @param state : state 数据
 * @param action : 动作
 */
function reducer(state: State, action: Action): State {
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
  const [state, dispatch] = React.useReducer(reducer, {
    count: initialCount,
  })
  const styleBtn = { marginLeft: 10 }
  return (
    <div style={{ border: '1px solid #fff', padding: 10 }}>
      Count: {state.count}
      <button style={styleBtn} onClick={() => dispatch({ type: 'increment' })}>
        +
      </button>
      <button style={styleBtn} onClick={() => dispatch({ type: 'decrement' })}>
        -
      </button>
      <button style={styleBtn} onClick={() => dispatch({ type: 'reset' })}>
        Reset
      </button>
    </div>
  )
}

export default Counter
