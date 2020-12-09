import React, { useState } from 'react'
import { Button } from 'antd'

type CounterProp = {
  initialCount: number
}

function CounterState(props: CounterProp) {
  const [count, setCount] = useState(() => {
    return props.initialCount
  })
  const styleBtn = { marginLeft: 10 }
  function handleAddCount() {
    setCount((count) => {
      const newCount = count + 1
      document.title = newCount + ''
      return newCount
    })
  }
  return (
    <div style={{ border: '1px solid #fff', padding: 10 }}>
      <p> ####### useState demo for count ####### </p>
      <p>{count}</p>
      <Button style={styleBtn} onClick={handleAddCount}>
        +
      </Button>
      <Button style={styleBtn} onClick={() => setCount(count - 1)}>
        -
      </Button>
      <Button style={styleBtn} onClick={() => setCount(props.initialCount)}>
        Reset
      </Button>
    </div>
  )
}

export default CounterState
