import React, { createContext, useContext } from 'react'

interface ContextCounter {
  counter: number
  name: string
}

// 定义 Context
const countContext = createContext<ContextCounter>({ counter: 0, name: '' })

export default function UseContextDemo() {
  return (
    //   通过 countContext.Provider 传递 context
    <countContext.Provider value={{ counter: 100, name: 'leslie' }}>
      <p> ####### useContext demo ####### </p>
      <FooSimple />
      <FooComplex />
    </countContext.Provider>
  )
}

// 使用 useContext 简化后
function FooSimple() {
  const context = useContext(countContext)
  return (
    <div>
      <p> ####### useContext with `useContext` ####### </p>
      <p>context.counter: {context.counter}</p>
      <p>context.name: {context.name}</p>
    </div>
  )
}

// 使用 <countContext.Consumer>
function FooComplex() {
  return (
    <countContext.Consumer>
      {(context) => {
        return (
          <div>
            <p> ####### useContext with `countContext.Consumer` ####### </p>
            <p>context.counter: {context.counter}</p>
            <p>context.name: {context.name}</p>
          </div>
        )
      }}
    </countContext.Consumer>
  )
}
