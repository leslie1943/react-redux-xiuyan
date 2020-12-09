import React, { useState, useEffect } from 'react'
import { Button } from 'antd'

export default function UseEffectDemo() {
  const [count, setCount] = useState(0)

  // 组件挂载完成之后执行, 组件数据更新完成之后完成
  // useEffect(() => {
  //   console.info('1222')
  // })
  // useEffect(() => {
  //   console.info('1222')
  // }, [])

  useEffect(() => {
    return () => {
      console.info('component will be unmounted')
    }
  })
  // useEffect(() => {
  //   const todoList = document.getElementById('todoList')
  //   const newItem = document.createElement('li')
  //   newItem.innerHTML = `我是第${count}个待办事项`
  //   todoList?.appendChild(newItem)
  // })

  return (
    <div>
      <p> ####### useEffect demo ####### </p>
      <p>当前共有{count}个 todo item</p>
      <div id="todoList"></div>
      <Button onClick={() => setCount(count + 1)}>add to do</Button>
    </div>
  )
}
