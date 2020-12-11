import React, { useRef, useState, useEffect } from 'react'
import { Button } from 'antd'

export default function HooksUseRefDemo() {
  const [count, setCount] = useState(0)

  let timerId = useRef<any>()

  useEffect(() => {
    timerId.current = setInterval(() => {
      setCount((count) => count + 1)
    }, 1000)
  }, [])

  const stopCount = () => {
    clearInterval(timerId.current)
  }
  return (
    <div>
      <p>
        <span>{count}</span>
      </p>
      <p>
        <Button onClick={stopCount}>Stop</Button>
      </p>
    </div>
  )
}
