import React, { useState, useEffect } from 'react'

export default function UseEffectDemo() {
  const [count, setCount] = useState(0)
  useEffect(() => {
    const todoList = document.getElementById('todoList')
    const newItem = document.createElement('li')
    newItem.innerHTML = `我是第${count}个待办事项`
    todoList?.appendChild(newItem)
  })

  return (
    <div>
      <p>当前共有{count}个 todo item</p>
      <div id="todoList"></div>
      <button onClick={() => setCount(count + 1)}>add to do</button>
    </div>
  )
}
