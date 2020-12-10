import React, { useState, memo, useCallback } from 'react'
import { Button } from 'antd'

export default function UseCallback() {
  const [count, setCount] = useState(0)

  // 如果setCount不发生变化, 通过 useCallback 每次渲染都会得到同样的resetCount实例
  // 当组件重新渲染的时候, setCount是不会发生改变的.
  const resetCount = useCallback(() => setCount(0), [setCount])

  return (
    <div>
      <p>{count}</p>
      <Button onClick={() => setCount(count + 1)}> + </Button>
      {/* 点击count+1的时候,页面会重新渲染, 当页面重新渲染的时候, resetCount和之前的resetCount就不是一个实例了, 
      所以即使使用 memo 包裹Foo组件, Foo组件因为 resetCount实例的变化会被重新执行 */}
      <Foo resetCount={resetCount} />
    </div>
  )
}

interface FooProps {
  resetCount: () => void
}
const Foo = memo(function Foo(props: FooProps) {
  console.info('Foo 组件重新渲染了')
  return (
    <div>
      <p>我是Foo组件</p>
      <p>
        <Button onClick={props.resetCount}>reset count</Button>
      </p>
    </div>
  )
})
