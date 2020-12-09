import React, { useState, useMemo } from 'react'
import { Button } from 'antd'

export default function UseMemoDemo() {
  const [count, setCount] = useState(0)
  const [flag, setFlag] = useState(true)

  const result = useMemo(() => {
    console.info('useMemo been performed.')
    return count * 2
  }, [count])

  return (
    <div>
      <p>{flag ? '真' : '假'}</p>
      <Button onClick={() => setFlag(!flag)}> Change </Button>
      <p>
        <span>
          {count} * 2 = {result}
        </span>
      </p>
      <Button onClick={() => setCount(count + 1)}> + </Button>
    </div>
  )
}
