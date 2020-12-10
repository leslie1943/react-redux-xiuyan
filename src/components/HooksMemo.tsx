import React, { useState, memo } from 'react'
import { Button } from 'antd'

export default function MemoDemo() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <p>{count}</p>
      <Button onClick={() => setCount(count + 1)}> + </Button>
      <Foo />
    </div>
  )
}

const Foo = memo(function Foo() {
  console.info('Foo 组件重新渲染了')
  return <div>我是Foo组件</div>
})
