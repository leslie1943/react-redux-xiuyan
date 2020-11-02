import React, { useState } from 'react'

export default function UseStateDemo() {
  const [text, setText] = useState('初始文本')
  const [person, setPerson] = useState({ name: 'leslie', age: 22 })

  function changeText() {
    setPerson({ name: 'dora', age: 18 })
    setText('修改后的文本')
    return
  }
  function resetText() {
    setPerson({ name: 'leslie', age: 22 })
    setText('初始文本')
    return
  }

  return (
    <div>
      <p>{text}</p>
      <p>{person.name}</p>
      <p>{person.age}</p>
      <button onClick={changeText}>change text</button>
      <button style={{ marginLeft: 10 }} onClick={resetText}>
        reset text
      </button>
    </div>
  )
}
