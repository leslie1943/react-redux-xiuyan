import React, { Component } from 'react'
import TodoDemo from '../../components/TodoDemo'

class ReducerTodo extends Component<any, any> {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div
            style={{ border: '1px solid #f56c6c', padding: 120 }}
            className="child-container"
          >
            <TodoDemo />
          </div>
        </header>
      </div>
    )
  }
}

export default ReducerTodo
