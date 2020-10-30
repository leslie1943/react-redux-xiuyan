import React from 'react'

type CounterProp = {
  initialCount: number
}

function CounterState(props: CounterProp) {
  const [count, setCount] = React.useState(props.initialCount)
  const styleBtn = { marginLeft: 10 }
  return (
    <div style={{ border: '1px solid #fff', padding: 10 }}>
      Count: {count}
      <button
        style={styleBtn}
        onClick={() => setCount((prevCount) => prevCount + 1)}
      >
        +
      </button>
      <button
        style={styleBtn}
        onClick={() => setCount((prevCount) => prevCount - 1)}
      >
        -
      </button>
      <button style={styleBtn} onClick={() => setCount(props.initialCount)}>
        Reset
      </button>
    </div>
  )
}

export default CounterState
