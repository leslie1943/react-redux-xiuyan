import React, { Component } from 'react'
import TodoDemo from '../../components/ReduxTodoDemo'

class ReducerTodo extends Component<any, any> {
  render() {
    return (
      <div style={{ padding: 50 }}>
        <TodoDemo />
      </div>
    )
  }
}

export default ReducerTodo
